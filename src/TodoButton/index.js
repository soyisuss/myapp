
import React from 'react';
import './TodoButton.css';
import { BsX } from "react-icons/bs";
import { TodoContext } from '../TodoContext';

function TodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <button className="CreateTodoButton"
            onClick={(event) => {
                setOpenModal(!openModal);
            }}><BsX /></button>
    );
}

export { TodoButton };