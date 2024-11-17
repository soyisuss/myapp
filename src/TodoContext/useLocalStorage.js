import React from 'react';

// const defaultTodos = [
//   { text: 'Tarea 1', completed: false },
//   { text: 'Hola 2', completed: true },
//   { text: 'Tarea 3', completed: false },
//   { text: 'Tarea 4', completed: false },
// ];
// localStore.setItem('itemName', JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);



    React.useEffect(() => {

        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemName]);


    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return { item, saveItem, loading, error };
}

export { useLocalStorage };