import { useRef, useState } from 'react';
import styled from 'styled-components';

const UploadFiles = () => {
	const [imgSrc, setImgSrc] = useState([]);
	const imgRef = useRef();

	const onUpload = e => {
		const fileArr = e.target.files;
		let fileURLs = [];
		let filesLength = fileArr.length > 5 ? 5 : fileArr.length;

		for (let i = 0; i < filesLength; i++) {
			const reader = new FileReader();
			reader.readAsDataURL(fileArr[i]);
			reader.onload = () => {
				fileURLs[i] = reader.result;
				setImgSrc(fileURLs);
			};
		}
	};

	const onClickUpload = e => {
		imgRef.current.click();
	};

	const onClickDelete = idx => {
		if (imgSrc.length === 0) return;
		const newFileURLs = imgSrc.filter(url => url !== imgSrc[idx]);
		console.log(newFileURLs);
	};

	return (
		<S.Wrapper>
			<input
				type="file"
				accept="image/*"
				multiple
				onChange={e => onUpload(e)}
				ref={imgRef}
				style={{ display: 'none' }}
			/>
			<S.ImgContainer>
				<S.MainImgContainer>
					<S.MainImgSection
						src={imgSrc[0] || '/Assets/Images/defaultImage.png'}
						onClick={onClickUpload}
					/>
					<S.DelBtn onClick={onClickDelete(0)}>-</S.DelBtn>
				</S.MainImgContainer>
				<S.SmallImgBox>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[1] || '/Assets/Images/defaultImage.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[2] || '/Assets/Images/defaultImage.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[3] || '/Assets/Images/defaultImage.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
					<S.SmallImgContainer>
						<S.SmallImgSection
							src={imgSrc[4] || '/Assets/Images/defaultImage.png'}
							onClick={onClickUpload}
						/>
						<S.DelBtn>-</S.DelBtn>
					</S.SmallImgContainer>
				</S.SmallImgBox>
			</S.ImgContainer>
			<S.Count>{imgSrc.length} / 5</S.Count>
		</S.Wrapper>
	);
};

export default UploadFiles;

const Wrapper = styled.div`
	width: 380px;
	margin: 0 auto;
`;

const ImgContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainImgContainer = styled.div`
	width: 190px;
	height: 190px;
	position: relative;
`;

const MainImgSection = styled.img`
	width: 190px;
	height: 190px;
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
	object-fit: cover;
`;

const SmallImgBox = styled.div`
	width: 190px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

const SmallImgContainer = styled.div`
	width: 90px;
	height: 90px;
	position: relative;
	margin: 0 2px;
`;

const SmallImgSection = styled.img`
	width: 90px;
	height: 90px;
	cursor: pointer;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.color.subBeige};
`;

const DelBtn = styled.div`
	width: 20px;
	height: 20px;
	top: 5px;
	right: 5px;
	border-radius: 15px;
	border: none;
	background-color: ${({ theme }) => theme.color.primary};
	position: absolute;
	color: ${({ theme }) => theme.color.white};
	font-size: ${({ theme }) => theme.fontSize.lg};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Count = styled.span`
	margin: 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.sm};
`;
const S = {
	Wrapper,
	ImgContainer,
	MainImgContainer,
	MainImgSection,
	SmallImgBox,
	SmallImgContainer,
	SmallImgSection,
	DelBtn,
	Count,
};
