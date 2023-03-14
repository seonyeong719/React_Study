import { useState } from "react";
import * as P from "../style";

function Contents({ userList }) {
    const [onEdit, setOnEdit] = useState(false);
    const [onEditContent, setOnEditContent] = useState({ nick: "", id: "", content: "" });

    const onContentEdit = () => {
        if (userList.myPost === "Y") {
            setOnEdit((prev) => !prev);
        } else alert("니거만 해");
        userList.User.nick_name = onEditContent.nick;
        userList.User.id = onEditContent.id;
        userList.content = onEditContent.content;
        console.log(userList);
    };

    const onChangeContent = (e) => {
        const { name, value } = e.target;
        setOnEditContent({ ...onEditContent, [name]: value });
    };

    const onClickRemoveBtn = () => {
        if (window.confirm("삭제할거냐")) {
            // setOnEdit(true);
            // userList.User.nick_name = "";
            // userList.User.id = "";
            // userList.content = "";
            // console.log(onEditContent);
        }
    };

    return (
        <P.ContentsBox>
            <P.Profile>
                <img src={userList.User.profile_img} />
                {onEdit ? (
                    <input name="nick" onChange={onChangeContent} />
                ) : (
                    <div>{userList.User.nick_name}</div>
                )}
            </P.Profile>

            <P.ContentsCenter>
                <div>
                    <div>
                        {onEdit ? (
                            <input name="id" onChange={onChangeContent} />
                        ) : (
                            <div>{userList.User.id}</div>
                        )}
                        <div>{("" + userList.createdAt).slice(0, 24)}</div>
                    </div>
                    <div>
                        {onEdit ? (
                            <button onClick={onContentEdit}>완료</button>
                        ) : (
                            <button onClick={onContentEdit}>✏️️</button>
                        )}
                        <button onClick={onClickRemoveBtn}>🗑️</button>
                    </div>
                </div>

                {onEdit ? (
                    <textarea name="content" onChange={onChangeContent} />
                ) : (
                    <div>{userList.content}</div>
                )}
            </P.ContentsCenter>
        </P.ContentsBox>
    );
}

export default Contents;
