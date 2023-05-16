import UserApi from 'Apis/userApi';
import MenuBar from 'Components/MenuBar/MenuBar';
import TokenService from 'Repository/TokenService';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WebHeader = () => {
	const navigate = useNavigate();

	const logout = async () => {
		try {
			const res = await UserApi.logout();
			if (res.status === 200) {
				TokenService.removeToken();
				navigate('/');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<S.Wrapper>
			<S.LogoutBar>
				<span>ㅇㅇㅇ님, 반가워요:)</span>
				<S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
			</S.LogoutBar>
			<Link to={'/main'}>
				<S.Logo src="/Assets/web_logo.png"></S.Logo>
			</Link>
			<MenuBar />
		</S.Wrapper>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	width: 60%;
	min-width: 700px;
	max-width: 1000px;
	height: 200px;
	font-family: 'Nanum_extraBold';
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	padding-bottom: 30px;
`;

const LogoutBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;

	span {
		padding-top: 8px;
		padding-right: 10px;
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

const LogoutButton = styled.button`
	padding: 5px 10px;
	border-radius: 5px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	color: ${({ theme }) => theme.PALETTE.white};
	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.PALETTE.primary[400]};
	}
`;

const Logo = styled.img`
	padding-top: 30px;
	margin-bottom: 50px;
	width: 320px;
`;

const S = {
	Wrapper,
	LogoutBar,
	LogoutButton,
	Logo,
};
