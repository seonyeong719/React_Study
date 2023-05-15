const ACCESS_KEY = 'access_token';

const TokenService = {
	// set
	setToken(token) {
		localStorage.setItem(ACCESS_KEY, token);
	},
	// get
	getToken() {
		return localStorage.getItem(ACCESS_KEY);
	},
	// remove
	removeToken() {
		localStorage.removeItem(ACCESS_KEY);
	},
};
export default TokenService;
