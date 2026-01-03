import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

 export const UserContext =createContext()

createRoot(document.getElementById('root')).render(
  <UserContext.Provider value={{name :"Fatima"}}>
    <StrictMode>
    <App />
  </StrictMode>,
  </UserContext.Provider>

)
