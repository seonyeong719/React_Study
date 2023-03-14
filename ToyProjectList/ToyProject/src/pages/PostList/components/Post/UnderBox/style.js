const { default: styled } = require("styled-components");

export const ContentsBox = styled.div`
    display: flex;
    justify-content: center;
    width: 580px;
    height: 100px;
    font-size: 17px;
    padding: 10px;
`;

export const Profile = styled.div`
    width: 15%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > img {
        border-radius: 50px;
    }

    & > div:last-child {
        margin-top: 5px;
    }
`;

export const ContentsCenter = styled.div`
    width: 85%;

    & > div {
        display: flex;
        justify-content: space-between;
    }

    & > div > div:first-child {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    & > div > div:first-child > div:first-child {
        margin-right: 10px;
    }

    & > div > div:first-child > div:last-child {
        opacity: calc(50%);
        font-size: 14px;
    }
`;

export const CommentsBox = styled.div`
    display: flex;
    justify-content: center;
    width: 560px;
    height: 100px;
    font-size: 15px;
    padding: 5px;
`;

export const CommentProfile = styled.div`
    width: 15%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;

    & > div:last-child {
        margin-top: 5px;
    }

    & > img {
        border-radius: 50px;
    }
`;

export const CommentCenter = styled.div`
    width: 85%;
    padding: 5px;

    & > div {
        display: flex;
        justify-content: space-between;
    }

    & > div > div:first-child {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    & > div > div:first-child > div:first-child {
        margin-right: 10px;
    }

    & > div > div:first-child > div:last-child {
        opacity: calc(50%);
        font-size: 12px;
    }
`;
