import * as P from "../style";

function Contents({ userList }) {
    // console.log(userList);
    return (
        <P.ContentsBox>
            <P.Profile>
                <img src={userList.User.profile_img} />
                <div>{userList.User.nick_name}</div>
            </P.Profile>

            <P.ContentsCenter>
                <div>
                    <div>
                        <div>{userList.User.id}</div>
                        <div>{("" + userList.createdAt).slice(0, 24)}</div>
                    </div>
                    <div>
                        <button>✏️️</button>
                        <button>🗑️</button>
                    </div>
                </div>

                <div>{userList.content}</div>
            </P.ContentsCenter>
        </P.ContentsBox>
    );
}

export default Contents;
