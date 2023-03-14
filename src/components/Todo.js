import React from "react";
import styles from "../style.module.css";

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const handleDelete = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };

  return (
    <div>
      <div className={styles.todoItem}>
        <h3 className={styles.todoName}>{todoItem.name}</h3>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo;
