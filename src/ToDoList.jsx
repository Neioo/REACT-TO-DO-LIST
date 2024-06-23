import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ deleteTask, toggleComplete, toDoLists }) => {
  return (
    <div className='to-do-list'>
      {toDoLists.map(listItem => (
        <ToDoItem
          key={listItem.id}
          listItem={listItem}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;


