import React from 'react';
import { RiCheckboxBlankFill, RiCheckboxFill, RiDeleteBin6Line } from 'react-icons/ri';

const ToDoItem = ({ listItem, toggleComplete, deleteTask} ) => {
    return(
        <div className={`to-do-container ${listItem.complete ? 'completed' : ''}`} key={listItem.id}>
          <p className='to-do-checkbox' onClick={() => toggleComplete(listItem.id)}>
            {listItem.complete ? <RiCheckboxFill /> : <RiCheckboxBlankFill/> }
          </p>
          <p className='to-do-text'>
            {listItem.text}
          </p>
          <p className='to-do-delete' onClick={() => deleteTask(listItem.id)}>
            <RiDeleteBin6Line />
          </p>
      </div>
      )
}

export default ToDoItem