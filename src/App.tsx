import { useRecoilValue, useSetRecoilState } from 'recoil'
import './index.css'
import TodoItem from './component/todo/TodoItem'
import AddTodo from './component/todo/AddTodo'
import { todoListState } from './component/recoil/atoms'

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

function App() {
  const todoList = useRecoilValue(todoListState)
  const setTodoList = useSetRecoilState(todoListState)

  const toggleComplete = (id: string) => {
    setTodoList((oldTodoList) =>
      oldTodoList.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    )
  }

  const removeTodo = (id: string) => {
    setTodoList((oldTodoList) => oldTodoList.filter((todo) => todo.id !== id))
  }

  return (
    <div className='container mx-auto'>
      <h1 className='flex mt-20 mb-10 lg:justify-start justify-center text-3xl font-bold font-serif text-black my-4'>
        ToDo List
      </h1>
      <motion.div
        className='todo-list'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {todoList.map((todo) => (
          <motion.div key={todo.id} variants={item}>
            <TodoItem
              text={todo.text}
              isComplete={todo.isComplete}
              toggleComplete={() => toggleComplete(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
            />
          </motion.div>
        ))}
      </motion.div>
      <AddTodo />
    </div>
  )
}

export default App
