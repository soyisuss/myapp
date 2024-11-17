import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

function App() {
  const [todos, saveTodos] = useLocalStorage('Todos_v1', []);

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

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
    <AppUI
      setSearchValue={setSearchValue}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />)
}

export default App;
