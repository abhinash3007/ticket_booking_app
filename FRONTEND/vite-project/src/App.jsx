import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Login from './components/login'

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
