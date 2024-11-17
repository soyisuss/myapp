import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { setOpenModal, addTodo } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () => { setOpenModal(false) };

    const onSubmit = e => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };


    return (
        <>
            <form
                onSubmit={onSubmit}
            >
                <label>
                    Escribe tu nuevo TODO
                    <textarea
                        placeholder="Cortar la cebolla para el almuerzo"
                        value={newTodoValue}
                        onChange={e => setNewTodoValue(e.target.value)}
                    />
                    <div className="TodoForm-buttonContainer">
                        <button
                            type="button"
                            className="TodoForm-button TodoForm-button-cancel"
                            onClick={onCancel}
                        >Cancelar</button>
                        <button
                            type="submit"
                            className="TodoForm-button TodoForm-button-add"
                        >Agregar</button>
                    </div>
                </label>
            </form>
        </>
    );
}

export { TodoForm };