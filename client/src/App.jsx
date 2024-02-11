import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import MonthForm from './components/MonthForm'
import Main from './views/Main'
import EditMonth from './components/EditMonth'

function App() {
  const navigate = useNavigate()

  const createMonth = (monthObject) => {
    axios.post('http://localhost:8000/api/create', monthObject)
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => console.log(err))
}

  return (
    <div>
      <Routes>
        <Route element={<Main/>} path='/'/>
        <Route element={<MonthForm onSubmitProp={createMonth} submitText="create"/>} path='/month/create'/>
        <Route element={<EditMonth/>} path='/month/edit/:monthId'/>
      </Routes>
    </div>
  )
}

export default App
