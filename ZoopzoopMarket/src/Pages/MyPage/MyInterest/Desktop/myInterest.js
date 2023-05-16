import styled from 'styled-components';
import MyPageApi from 'Apis/myPageApi';
import InterestCard from 'Components/Card/Desktop/Card_Interest';
import { useInfiniteQuery } from 'react-query';
import { useState } from 'react';
import likeListArr from './Mock/interestMock';

const MyInterestPage = () => {
	const [likeList, setLikeList] = useState(likeListArr);

	// const myInterest = async () => {
	// 	try {
	// 		const res = await MyPageApi.likeProductList({ page: 1 });
	// 		setLikeList(res.data.LikeList);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	myInterest();
	// }, []);
	console.log(likeList);

	// 한페이지당 몇페이지를 불러올지? 토탈 페이지도 모르는 상태.
	// 인피니티 쿼리로 바꾸려고 목데이터를 돌려서 적용 해보려 했으나 잘 적용을 못한건지 실패ㅠ
	// 일단 원활한 퍼블리싱 수정을 위해 데이터를 돌려놓은 상태.
	const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
		['myInterest'],
		({ pageParam = 1 }) => MyPageApi.likeProductList(pageParam),
		{
			getNextPageParam: lastPage =>
				!lastPage.page ? lastPage.nextPage : undefined,
			retry: false,
		},
	);

	return (
		<S.Container>
			{likeList &&
				likeList.map(product => (
					<S.Card>
						<InterestCard
							index={product.Product.idx}
							products={product.Product}
						/>
					</S.Card>
				))}
		</S.Container>
	);
};

export default MyInterestPage;

const Container = styled.div`
	max-width: 60vw;
	height: 100%;
	margin: 30px auto;
	display: flex;
	justify-content: flex-start;
	flex-flow: wrap;
`;
const Card = styled.div`
	margin: 10px;
`;

const HeartZone = styled.div`
	width: 250px;
	height: 80px;
	background-color: lightgray;
`;

const S = {
	Container,
	Card,
	HeartZone,
};
