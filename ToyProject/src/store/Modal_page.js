import { createContext } from "react";
import { useState } from "react";
export const isModal = createContext();

function ModalPage({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <isModal.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</isModal.Provider>
        </>
    );
}
export default ModalPage;
