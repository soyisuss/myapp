import React from 'react';

// const defaultTodos = [
//   { text: 'Tarea 1', completed: false },
//   { text: 'Hola 2', completed: true },
//   { text: 'Tarea 3', completed: false },
//   { text: 'Tarea 4', completed: false },
// ];
// localStore.setItem('itemName', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return [item, saveItem];
}

export { useLocalStorage };