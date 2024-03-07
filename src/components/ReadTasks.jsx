import { useSelector } from 'react-redux'
import Task from "./Task.jsx"

const ReadTasks = ()=>{
  const tasks = useSelector((state) => state.crud)

  return(
    <>
      {tasks.map((value,ind)=>{
        return <Task key={ind} taskIndex={ind} value={value}/>
      })}
    </>
  )
}

export default ReadTasks;