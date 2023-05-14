import ChatMessage from 'Components/ChatMessage/ChatMessage';
import styled from 'styled-components';

const ChatList = ({ chatList, chatroomIdx, setChatroomIdx }) => {
	// console.log('chatList', chatList);

	return (
		<>
			<S.LeftUpperBar>
				<span>채팅목록</span>
			</S.LeftUpperBar>
			<S.ListContainer>
				{chatList.map(chat => {
					return (
						<ChatMessage
							onClick={() => {
								console.log('chat--->', chat);
								setChatroomIdx(chat.roomIdx);
							}}
							chat={chat}
						/>
					);
				})}
			</S.ListContainer>
		</>
	);
};

export default ChatList;

const LeftUpperBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10%;
	background-color: ${({ theme }) => theme.color.primary};
	/* border: 2px solid ${({ theme }) => theme.color.primary}; */
	color: white;
	cursor: pointer;
	border-radius: 5px 0 0 0;
`;

const ListContainer = styled.div`
	height: 90%;
	display: flex;
	flex-direction: column;
	padding: 0 0.2rem;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 8px;
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #aaa;
		&:hover {
			background-color: #999;
		}
	}
`;

const S = {
	LeftUpperBar,
	ListContainer,
};
