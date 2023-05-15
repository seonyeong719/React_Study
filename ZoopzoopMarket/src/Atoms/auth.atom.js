import TokenService from 'Repository/TokenService';
import { atom } from 'recoil';

const localStorageEffect =
	key =>
	({ setSelf, onSet }) => {
		const savedValue = TokenService.getToken(key);

		if (savedValue != null) {
			setSelf(savedValue);
		}
		onSet((newValue, _, isReset) => {
			isReset
				? TokenService.removeToken(key)
				: TokenService.setToken(JSON.stringify(key, newValue));
		});
	};

//setSelf :이 함수는 로컬스토리지에서 값을 불러와 초기값을 지정해주는 함수이고(주로 storage에 있는 데이터를 atom에 넣어줄 때 사용)
//onSet : 함수가 해당 atom값이 변경될 때마다 로컬스토리지와 atom 값을 동기화해주는 역할을 한다.(Storage에 데이터를 저장)

export const AuthAtom = atom({
	key: 'AuthAtom',
	default: true,
	effects: [localStorageEffect()],
	// effects 에 배열안에 앞서 만든 해당 함수를 넣어주면 아톰으로 관리가 된다.
});
