import { AuthAtom } from 'Atoms/auth.atom';
import { useRecoilValue } from 'recoil';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	// const access_token = TokenService.getToken();
	const navigate = useNavigate();
	const authState = useRecoilValue(AuthAtom);

	return authState ? children : <Navigate to={`/`} />;
	// return access_token ? children : <Navigate to={`/`} />;
};
export default PrivateRoute;
