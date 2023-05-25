import TokenService from 'Repository/TokenService';
import { atom } from 'recoil';

const localStorageEffect =
	key =>
	({ setSelf, onSet }) => {
		const savedData = TokenService.getToken(key);
		if (savedData != null) {
			setSelf(JSON.parse(savedData));
			// atom이 변화가 감지될 때 작동, Storage에 데이터 저장
			// setSelf에 의해서는 작동하지 않음
		} else {
			// 로컬 스토리지에 저장된 값이 없으면 로그아웃 처리
			TokenService.removeToken(key);
			TokenService.removeToken('access_token');
			TokenService.removeToken('refresh_token');
			if (window.location.pathname !== '/form/login') {
				window.location.href = '/form/login';
			}
		}

		onSet((newValue, _, isReset) => {
			isReset
				? TokenService.removeToken(key)
				: TokenService.setToken(key, JSON.stringify(newValue));
		});
	};

//setSelf :이 함수는 로컬스토리지에서 값을 불러와 초기값을 지정해주는 함수이고(주로 storage에 있는 데이터를 atom에 넣어줄 때 사용)
//onSet : 함수가 해당 atom값이 변경될 때마다 로컬스토리지와 atom 값을 동기화해주는 역할을 한다.(Storage에 데이터를 저장)

export const AuthAtom = atom({
	key: 'AuthAtom',
	default: true,
	effects: [localStorageEffect('user')],
});
