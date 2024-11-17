
import React from "react";
import { TodoButton } from "../components/TodoButton";
import { TodoCount } from "../components/TodoCount";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoItem } from "../components/TodoItem";

function AppUI(setSearchValue, totalTodos, completedTodos, searchedTodos, searchValue, completeTodo, deleteTodo) {
    return (
        <>
            <TodoCount
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
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
        </>
    );
}

export { AppUI };