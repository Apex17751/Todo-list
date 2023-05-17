import React, {useState} from 'react'

const EditTodo = ({editButton, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        editButton(value, task.id)
        setValue('')
    }

  return (
    <div>
          <form>
         <div className="flex mx-auto items-center justify-center mb-6 mt-4 relative" id='edit'>
         <input type="text" name="" className='rounded-lg py-2 px-3 flex outline-none' id='update' placeholder='Update Task...'value={value} onChange={(e) => setValue(e.target.value)} />
          <div className='absolute right-0'>
          <button type='button' className
          =' flex px-3 py-2  rounded-md bg-orange-400 text-white uppercase text-center' id='btnz' onClick={handleSubmit}>Update</button>
          </div>
         </div>
          </form>      
    </div>
  )
}

export default EditTodo
