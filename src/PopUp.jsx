import React from 'react'

const PopUp = ({ popUp, handlePopUp, addTask, newTaskText, setNewTaskText }) => {
  return (
    popUp && 
        <div className='pop-up-container'>
          <div className='pop-up'>
            <p className='pop-up-title'>
              Let's add your task!
            </p>
            <input className='pop-up-input' type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
            <div className='pop-up-button-container'>
              <button className='pop-up-button back' onClick={() => handlePopUp()}>
                Go Back
              </button>
              <button className='pop-up-button add' onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>
        </div>
  )
}

export default PopUp