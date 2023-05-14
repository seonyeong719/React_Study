import styled from 'styled-components';
import UploadFiles from './Components/uploadFiles';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import KaMap from 'Components/Map/Map';
import FindAddress from 'Components/Address/Desktop/address';
import { Axios } from 'Apis/@core';

const RegisterPage = () => {
	const [searchResult, setSearchResult] = useState('');

	const [price, setPrice] = useState('');
	const [tags, setTags] = useState([]);

	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		setValue,
		formState: { errors },
	} = useForm();

	const handleKeyDown = e => {
		if (e.keyCode === 13) {
			clearErrors('tag'); // 에러초기화
			e.preventDefault();
			const newTag = e.target.value.trim(); //공백있으면 trim으로 제거.
			if (newTag) {
				setTags([...tags, newTag]);
				e.target.value = '';
			}
		}
	};
	const handleDelete = deleteTag => e => {
		console.log('!!!!!!', e);
		e.preventDefault();
		setTags(prevTags => prevTags.filter(tag => tag !== deleteTag));
	};

	const handlePriceChange = e => {
		const value = e.target.value;
		const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
		const priceValue = isNaN(num) ? 0 : num;
		const formattedPrice = priceValue.toLocaleString();
		setPrice(formattedPrice);
	};

	const onSubmit = data => {
		if (tags.length === 0) {
			//리액트 훅폼으로 에러메세지 셋팅
			setError(
				'tag', //에러 이름. 기존에 있는 것과 겹칠시 그쪽으로 에러 들어감
				{ message: '1개이상 꼭 입력해주세요.' }, //errors에 넣을 에러 메시지
				{ shouldFocus: true }, //에러 발생시 해당 구간에 포커스하게 하는 설정
			);
			return;
		} else setValue('', ''); //값이 유효하면 set!
		try {
			const formData = new FormData();
			formData.append('title', data.title);
			formData.append('price', Number(data.price.replace(/,/g, '')));
			formData.append('category', Number(data.price) === 0 ? 1 : 0);
			formData.append('description', data.content);
			formData.append('region', searchResult);
			formData.append('tag', tags);
			[...data.mainImg].forEach(element => {
				formData.append('images', element);
			});
			// 참고 : https://pobsiz.tistory.com/12 (3번)
			// 같은 키값에 코드를 여러번 실행시켜야함.?
			Axios.post('/api/product', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});
			alert('물품등록이 완료되었습니다.');
		} catch (err) {
			return console.log(err);
		}
	};

	return (
		<S.Wrapper onSubmit={handleSubmit(onSubmit)}>
			<UploadFiles register={register} />
			<S.Blank></S.Blank>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>제목</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="최대 20자까지 입력 가능합니다."
						maxLength={19}
						{...register('title', {
							required: '제목은 필수 사항입니다.',
						})}
					></S.InputBox>
					{errors.title && <Error role="alert">{errors.title.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>가격</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="0원 기입시 무료 나눔템으로 분류됩니다."
						{...register('price', {
							required: '가격은 필수 사항입니다.',
							pattern: {
								value: /^[0-9,]+$/,
								message: '숫자만 입력해주세요',
							},
						})}
						value={price}
						type="text"
						onChange={handlePriceChange}
					></S.InputBox>
					{errors.price && <Error role="alert">{errors.price.message}</Error>}
				</S.InputContainer>
			</S.Line>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title>태그</S.Title>
				<S.InputContainer>
					<S.InputBox
						placeholder="이곳에 입력해주세요."
						onKeyDown={handleKeyDown}
					></S.InputBox>
					{errors.tag && <Error role="alert">{errors.tag.message}</Error>}
					<S.TagWrapper>
						{tags &&
							tags.map((tag, index) => (
								<S.TagBox key={index}>
									{tag}
									<button onClick={e => handleDelete(tag)(e)}>x</button>
								</S.TagBox>
							))}
					</S.TagWrapper>
				</S.InputContainer>
			</S.Line>
			<S.AddressWrapper>
				<S.AddressTitleContainer>
					<S.Mark>*</S.Mark>
					<S.Title>거래장소</S.Title>
					<S.Address>{searchResult}</S.Address>
					<FindAddress setter={setSearchResult} />
				</S.AddressTitleContainer>
				<KaMap />
			</S.AddressWrapper>
			<S.Line>
				<S.Mark>*</S.Mark>
				<S.Title style={{ width: '100px' }}>본문 내용</S.Title>
				<S.InputContainer>
					{errors.content && (
						<S.Error role="alert" style={{ left: '20px', top: '-10px' }}>
							{errors.content.message}
						</S.Error>
					)}
				</S.InputContainer>
			</S.Line>
			<S.ContentBox>
				<S.TxtArea
					placeholder="본문 내용을 입력해주세요."
					{...register('content', {
						required: '본문 내용은 필수 사항입니다.',
					})}
				></S.TxtArea>
			</S.ContentBox>
			<S.Container>
				<S.RegisterBtn>등록하기</S.RegisterBtn>
			</S.Container>
		</S.Wrapper>
	);
};

export default RegisterPage;

const Wrapper = styled.form`
	margin: 50px 0;
`;

const Blank = styled.div`
	width: 100%;
	height: 20px;
`;

const Container = styled.div`
	width: 700px;
	margin: 0 auto;
	padding: 10px;
	display: flex;
`;

const Line = styled.div`
	width: 700px;
	display: flex;
	align-items: center;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const Mark = styled.span`
	position: absolute;
	color: ${({ theme }) => theme.color.primary};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	top: 0;
	left: 0;
`;

const Title = styled.span`
	width: 80px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const InputContainer = styled.div`
	width: 600px;
	position: relative;
`;

const InputBox = styled.input`
	width: 600px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.color.subBeige};
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
	:focus {
		outline: none;
	}
`;

const Error = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.primary};
	margin-left: 30px;
	margin-top: 5px;
	position: absolute;
	left: 400px;
	top: 10px;
`;

const AddressWrapper = styled.div`
	width: 700px;
	display: flex;
	flex-direction: column;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const AddressTitleContainer = styled.div`
	width: 680px;
	display: flex;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
`;

const AddressMap = styled.div`
	width: 680px;
	position: relative;
	margin: 0 auto;
`;

const Address = styled.div`
	width: 450px;
	padding: 10px;
	font-size: ${({ theme }) => theme.fontSize.md};
`;

const SearchBtn = styled.button`
	width: 120px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	background: none;
	cursor: pointer;
`;

const ContentBox = styled.div`
	width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10px 30px 10px;
	position: relative;
	margin: 0 auto;
`;

const TxtArea = styled.textarea`
	width: 700px;
	margin-top: -15px;
	height: 400px;
	font-size: ${({ theme }) => theme.fontSize.base};
	padding: 20px;

	:focus {
		outline: none;
	}
`;

const RegisterBtn = styled.button`
	width: 240px;
	height: 54px;
	border: 2px solid ${({ theme }) => theme.color.primary};
	border-radius: 5px;
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	margin-left: auto;
	cursor: pointer;
	:hover {
		background-color: ${({ theme }) => theme.color.primary};
		color: ${({ theme }) => theme.color.white};
	}
`;

const TagWrapper = styled.div`
	border: 2px solid green;
`;

const TagBox = styled.div`
	border: 1px solid green;
`;

const S = {
	Wrapper,
	Blank,
	Container,
	RegisterBtn,
	Line,
	Mark,
	Title,
	InputContainer,
	InputBox,
	Error,
	AddressWrapper,
	AddressTitleContainer,
	Address,
	AddressMap,
	ContentBox,
	TxtArea,
	SearchBtn,
	TagWrapper,
	TagBox,
};
