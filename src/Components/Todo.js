import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList.js'
import {v4 as uuidv4 } from 'uuid'
import EditTodo from './EditTodo'
uuidv4();


const Todo = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false,
        isEditing: false}])
        
        console.log(todos)
    }
    const toggleComplete = id =>{
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed} :todo))
    }
    const deleteButton = id =>{
      setTodos(todos.filter(todo => todo.id !== id))
    }
    const editButton = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo,
      isEditing: !todo.isEditing} : todo))
    }
    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='bg-slate-100 h-screen flex items-center justify-center' id='font'>
     <div className='bg-slate-700 pb-20 rounded-xl' id='width'>
     <TodoForm addTodo = {addTodo}/>
     {todos.map((todo, index) => (
      todo.isEditing ? (
        <EditTodo editButton={editTask} task={todo}/>
      ) : (
        <TodoList task={todo} key={index} 
        toggleComplete = {toggleComplete}
        deleteButton = {deleteButton}
        editButton={editButton}
        />

      )
           
          ))}
          
     </div>
        
    </div>
  
  )
}

export default Todo
