import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ModalPage from "./store/Modal_page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ModalPage>
            <App />
        </ModalPage>
    </React.StrictMode>
);
