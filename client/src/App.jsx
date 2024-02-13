import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import MonthForm from './components/MonthForm'
import Main from './views/Main'
import EditMonth from './components/EditMonth'

function App() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})

  const createMonth = (monthObject) => {
    axios.post('http://localhost:8000/api/create', monthObject)
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
}

  return (
    <div>
      <Routes>
        <Route element={<Main/>} path='/'/>
        <Route element={<MonthForm onSubmitProp={createMonth} submitText="create" errors={errors}/>} path='/month/create'/>
        <Route element={<EditMonth/>} path='/month/edit/:monthId'/>
      </Routes>
    </div>
  )
}

export default App
