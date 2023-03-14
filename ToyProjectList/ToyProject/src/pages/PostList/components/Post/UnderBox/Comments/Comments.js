import * as P from "../style";
// import Buttons from "../../../../../../components/Button/Button";

function Comments({ commentsUserList }) {
    const onCommentEdit = () => {
        console.log(commentsUserList.myComment);
    };

    return (
        <P.CommentsBox>
            {/* 댓글 프로필 이미지 및 닉네임 */}
            <P.CommentProfile>
                <img src={commentsUserList.User.profile_img} />
                <div>{commentsUserList.User.nick_name}</div>
            </P.CommentProfile>

            {/* 댓글 프로필 이미지 그 외 나머지 */}
            <P.CommentCenter>
                {/* 댓글 상단 */}
                <div>
                    <div>
                        <div>{commentsUserList.User.id}</div>
                        <div>{("" + commentsUserList.createdAt).slice(0, 24)}</div>
                    </div>
                    <div>
                        <button onClick={onCommentEdit}>✏️️</button>
                        <button>🗑️</button>
                    </div>
                </div>

                {/* 댓글 하단 */}
                <div>{commentsUserList.content}</div>
            </P.CommentCenter>
        </P.CommentsBox>
    );
}

export default Comments;
