import UserApi from './userApi';
import axios from 'axios';

//테스트용
export default axios.create({ baseURL: 'http://localhost:3004' });

// 실제 백엔드 연결용
export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
	// withCredentials를 true로 설정해줘야 refreshToken cookie를 주고받을 수 있다.
});

//request interceptors
Axios.interceptors.request.use(
	//axios 요청이 전달되기 전에 interceptor가 작업을 수행하는 코드이다.
	config => {
		const access_token = TokenService.getToken();
		if (access_token) {
			// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
			config.headers.Authorization = `Bearer ${access_token}`;
			return config;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

// response interceptors
Axios.interceptors.response.use(
	// 응답이 성공적인 경우 아무것도 작동 하지 않음.
	response => {
		return response;
	},

	// accessToken 재발급 필요
	async error => {
		// access token 이 만료가 됐다면 로그아웃.
		if (error.response.status === 417) {
			await UserApi.logout();
		}

		const originalRequest = error.config;
		// 에러코드가 403인 경우 세션 만료가 됨. =>  refreshToken을 통해 accessToken 재발급
		if (error.response.status === 403 && !originalRequest._retry) {
			originalRequest._retry = true;

			const res = await UserApi.refreshToken();
			if (res.status === 200) {
				const token = res.data.data;
				TokenService.setToken(token);
				Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				return Axios(originalRequest);
			}
		}
		return Promise.reject(error);
	},
);
