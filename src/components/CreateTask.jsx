import { useDispatch } from 'react-redux'
import { createTask } from '../app/crudSlice'
import { useRef } from 'react';

const CreateTask = ()=>{
  const dispatch = useDispatch()
  const inputText = useRef(null)

  const handleDispatch = (e)=>{
    e.preventDefault();
    const inputValue = inputText.current.value
    if(inputValue != ""){
      dispatch(createTask(inputValue))
      inputText.current.value = ""
    }
  }
  
  return(
    <form onSubmit={handleDispatch}>
      <input ref={inputText} type="text" placeholder="Add a new task"/>
    </form>
  )
}

export default CreateTask;