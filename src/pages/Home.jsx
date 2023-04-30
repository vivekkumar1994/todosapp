import React from 'react'

import TodoForm from './TodoForm'
import Todos from './Todos'
import "./home.css"
import Header from './Header'

const Home = () => {
  return (
    <>
    <Header/>
    <div style={{width:"50%",margin:"auto"}}>
       
      <TodoForm />
      <Todos />
    </div>
    </>
  )
}

export default Home
