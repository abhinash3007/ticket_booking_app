import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Login from './components/login'
import SignUp from './components/SignUp'

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
