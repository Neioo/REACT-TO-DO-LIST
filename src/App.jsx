import { useEffect, useState } from 'react';
import './App.css';
import { TbPencilPlus } from 'react-icons/tb';
import { v4 as uuid } from "uuid";
import PopUp from './PopUp';
import ToDoList from './ToDoList';


function App() {
  const [toDoList, setToDoList] = useState(() => {
    const storedList = localStorage.getItem('toDoList');
    return storedList ? JSON.parse(storedList) : [];
  })
  const [popUp, setPopUp] = useState(false);
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);

  function handlePopUp(action){
    if (action === "open"){
      setPopUp(true)
    } else {
      setPopUp(false)
    }
  }

  function addTask(){
    if(newTaskText !== ""){
      setToDoList(current => {
        return [
          ...current,
          {
            id: uuid(),
            complete: false,
            text: newTaskText
          }
        ]
      })
      setNewTaskText("");
      setPopUp(false)
    }
  }

  function toggleComplete(id){
    setToDoList(current => {
      return current.map(item => {
        if (item.id === id){
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item;
      });
    });
  }

  function deleteTask(id) {
    setToDoList(current => {
      return current.filter(item => item.id !== id);
    });
  }

  return (
    <>
    <PopUp
      popUp={popUp}
      handlePopUp={handlePopUp}
      addTask={addTask}
      newTaskText={newTaskText}
      setNewTaskText={setNewTaskText}
    />

    {/* header */}
    <div className='header-container'>
      <div className='header'>
        <p className='header-title'>
          My Tasks
        </p>
        <div className='header-add-task' onClick={() => handlePopUp("open")}>
          <p className='header-add-task-text'>
            <TbPencilPlus />
          </p>
        </div>
      </div>
    </div>

    <ToDoList
      toggleComplete ={toggleComplete}
      deleteTask = {deleteTask}
      toDoLists = {toDoList}
    />
  </>
  )
}

export default App
