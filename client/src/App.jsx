import './App.css'
import { Route, Routes } from 'react-router-dom'
import MonthForm from './components/MonthForm'
import Main from './views/Main'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<MonthForm/>} path='/month/create'/>
        <Route element={<Main/>} path='/'/>
      </Routes>
    </div>
  )
}

export default App
