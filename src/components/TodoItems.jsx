/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <TodoItem
          todoDate={item.date}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
