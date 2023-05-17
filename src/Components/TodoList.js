import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({task, toggleComplete, deleteButton, editButton}) => {
  return (
    <div className='mt-4'>
        <div className='flex px-3 py-3  rounded-lg bg-orange-400 text-white text-center lg:w-72' id='btn'>
            <div className='flex items-center pl-3 justify-between cursor-pointer'>
            <h1 onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</h1>
            
            <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editButton(task.id)} className='cursor-pointer' />
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteButton(task.id)} className='pl-3 pr-2 cursor-pointer' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default TodoList
