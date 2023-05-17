import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue('')
    }

  return (
    <div>
          <form onSubmit={handleSubmit}>
          <h1 className='text-slate-100 text-center mb-4  pt-10 text-xl ' >MY TODO LIST!</h1>
          <input type="text" name="" id="with" className='mx-auto rounded-lg py-2 px-3 flex lg:w-72 mb-3 outline-none' placeholder='what are you doing today?...'value={value} onChange={(e) => setValue(e.target.value)} />
          <div className='mb-10'>
          <button type='button' className
          ='mx-auto flex px-3 py-2  rounded-xl bg-orange-400 text-white uppercase lg:w-72 text-center' id='btn'onClick={handleSubmit}>Add Task</button>
          </div>
          </form>      
    </div>
  )
}

export default TodoForm
