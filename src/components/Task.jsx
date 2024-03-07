import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../app/crudSlice.js';
import { TaskWrapper } from '../styles/TaskWrapper.js'

const Task = ({value, taskIndex})=>{
  const dispatch = useDispatch()
  const [editable, setEditable] = useState(false)
  const [newValue, setNewValue] = useState(value)
  const inputText = useRef(null)

  const handleDelete = (e) => {    
    dispatch(deleteTask(e.target.dataset.id))
  }

  const handleUpdate = () => { 
    if(editable) setEditable(false)
    if(!editable) setEditable(true)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(updateTask({
      id: e.target.dataset.id,
      newValue
    }))

    setEditable(false)
  }

  const handleChange = (e)=>{
    setNewValue(e.target.value)
  }

  return <TaskWrapper>
    { editable ? 
      <form onSubmit={handleSubmit} data-id={taskIndex}>
        <input ref={inputText} onChange={handleChange} type="text" value={newValue} />
      </form>
    : <span className="task">{value}</span> }
    {!editable && <span onClick={handleUpdate} className="icon material-symbols-outlined">edit</span>}
    {!editable && <span onClick={handleDelete} data-id={taskIndex} className="icon material-symbols-outlined">delete</span>}
  </TaskWrapper>
}

Task.propTypes = {
  taskIndex: PropTypes.number,
  value: PropTypes.string
};

export default Task