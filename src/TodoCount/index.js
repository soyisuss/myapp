
import React from 'react';
import './TodoCount.css';
import { TodoContext } from './../TodoContext';

function TodoCount() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return (
        <h1 className="TodoCounter">
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
        </h1>
    );
}


export { TodoCount };

