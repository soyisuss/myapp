
import './../css/TodoButton.css';
import { BsX } from "react-icons/bs";

function TodoButton() {
    return (
        <button className="CreateTodoButton"
            onClick={(event) => {
                console.log('Le diste click')
                console.log(event)
            }}><BsX /></button>
    );
}

export { TodoButton };