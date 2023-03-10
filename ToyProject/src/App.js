import "./App.css";
import Modal from "./pages/Modal/Modal";
import Header from "./components/Header/Header";
import Index from "./pages/PostList/components/Post/index";
import { MockPost } from "./__mocks__/post";
import { isModal } from "./store/Modal_page";
import { useContext } from "react";
import { useState } from "react";
// import Buttons from "./components/Button/Button";

function App() {
    const Posts = MockPost(10);
    const [posts, setPosts] = useState(Posts);

    /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/

    const { isModalOpen, setIsModalOpen } = useContext(isModal);
    return (
        <>
            <Header />
            {/* <Buttons posts={posts} setPosts={setPosts} /> */}
            {isModalOpen && <Modal posts={posts} setPosts={setPosts} />}
            {posts.map((userList) => (
                <Index userList={userList} />
            ))}
        </>
    );
}

export default App;
