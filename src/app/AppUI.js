
import React from "react";
import { TodoButton } from "../TodoButton";
import { TodoCount } from "../TodoCount";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodoNotices/TodosError";
import { TodosLoading } from "../TodoNotices/TodosLoading";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";


function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <>

            <TodoCount />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <TodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };