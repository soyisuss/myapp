
import './../css/TodoItem.css';
import { BsCheck } from "react-icons/bs";
import { BsX } from "react-icons/bs";

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="TodoItem">
            <BsCheck
                className={`Icon Icon-check ${completed && "Icon-check--active"}`}
                onClick={onComplete} />

            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>

            <BsX
                className="Icon Icon-delete"
                onClick={onDelete}
            />
        </li >
    );
}

export { TodoItem };