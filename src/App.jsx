import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'
import './App.css'

import TodoList from './components/TodoList'
import InputField from './components/InputField'



const App = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }


  return (
    <div className='App'>

      <InputField 
        text={text} 
        handleInput={setText}
        handleSubmit={addTask}
        />

      <TodoList />
      
    </div>
  )
}

export default App
