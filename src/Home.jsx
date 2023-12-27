import React from 'react'
import AddToDo from './components/AddToDo'
import ToDo from './components/ToDo'

const Home = () => {
  return (
    <div className=' max-w-5xl mx-auto px-3'>
      <div className=' text-center text-4xl font-semibold bg-slate-300 my-5 p-2 rounded'>ToDo List (REDUX TOOLKIT)</div>
      <AddToDo/>
      <ToDo/>
    </div>
  )
}

export default Home