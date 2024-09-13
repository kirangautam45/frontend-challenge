import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../recoil/atoms'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    if (inputValue.trim() === '') return

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Math.random().toString(36).substr(2, 9),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  return (
    <div className='flex items-center lg:w-1/2 w-full m-2 mt-4 p-2 border-y'>
      <div className='size-6 mr-4 border-2 border-purple-600 bg-purple-600 rounded-full flex items-center justify-center'>
        <span className='flex items-center justify-center text-3xl font-bold mb-1 text-white'>
          +
        </span>
      </div>

      <input
        type='text'
        value={inputValue}
        onKeyDown={handleKeyPress}
        onChange={(e) => setInputValue(e.target.value)}
        className=' p-2 lg:w-full w-10/12 focus:outline-none text-[16px] font-semibold'
        placeholder='memorize the dictionary'
      />
      <button
        className='bg-purple-600 w-[140px] text-white px-4 py-2 rounded font-semibold text-[14px]'
        onClick={addItem}
      >
        Add Items
      </button>
    </div>
  )
}

export default AddTodo
