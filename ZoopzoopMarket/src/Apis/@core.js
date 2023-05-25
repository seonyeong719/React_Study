import TokenService from 'Repository/TokenService';
import axios from 'axios';

//테스트용
export const MockAxios = axios.create({ baseURL: 'http://localhost:3004' });

// 실제 백엔드 연결용
export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true,
});
// withCredentials를 true로 설정해줘야 refreshToken cookie를 주고받을 수 있다.

Axios.interceptors.request.use(
	//axios 요청이 전달되기 전에 interceptor가 작업을 수행하는 코드이다.
	config => {
		const token = TokenService.getToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	},
);

// 토큰만료되었을때 (아직 사용x)
Axios.interceptors.response.use(
	// 응답이 성공적인 경우 아무것도 작동 하지 않음.
	response => {
		return response;
	},
	async error => {
		// access token 이 만료가 됐다면 로그아웃.
		if (error.response.status === 417) {
			await UserApi.logout();
		}
		const originalRequest = error.config;
		// 에러코드가 403인 경우 세션 만료가 됨. =>  refreshToken을 통해 accessToken 재발급
		if (error.response.status === 403 && !originalRequest._retry) {
			// 재요청
			originalRequest._retry = true;
			const res = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/user/refreshToken`,
			);
			if (res.status === 200) {
				TokenService.setToken(res.data.accessToken);
				return Axios(originalRequest);
			}
		}
		return Promise.reject(error);
	},
);
