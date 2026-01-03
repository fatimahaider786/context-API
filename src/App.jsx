import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { UserContext } from './main'
import Header from './components/Header.jsx'
import Todo from './components/Todo.jsx'

 export const CountContext =createContext();


 function App() {
  const [count, setCount] = useState(0)
  const data =useContext (UserContext)


  return (
    < CountContext.Provider value={{count,setCount}}>
       <Header/>
       <Todo/>
    

      <div>
        <h1>{data.name}</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
    </CountContext.Provider>
  )
}

export default App
