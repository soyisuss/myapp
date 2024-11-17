import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('Todos_v1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const searchedTodos = todos.filter(todo =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const [openModal, setOpenModal] = React.useState(false);

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newItem = [...todos];
        const index = newItem.findIndex(todo => todo.text === text);
        newItem[index].completed = !newItem[index].completed;
        saveTodos(newItem);
    };

    const deleteTodo = (text) => {
        const newItem = [...todos];
        const index = newItem.findIndex(todo => todo.text === text);
        newItem.splice(index, 1);
        saveTodos(newItem);
    };

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                setSearchValue,
                totalTodos,
                completedTodos,
                searchedTodos,
                searchValue,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
