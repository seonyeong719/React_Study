import axios from "axios";

function App() {
    const getData = async () => {
        const response = await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
        return response.data;
    };

    let res = getData();

    res.then((data) => {
        console.log(data);
    });

    return (
        <>
            <div></div>
        </>
    );
}

export default App;
