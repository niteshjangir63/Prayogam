import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Marketplace from './pages/Marketplace.jsx'
import Farmer from './pages/Farmer.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Signup from './pages/Signup.jsx'
import Page404 from './pages/Page404.jsx'

function App() {

  return (

    <>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/marketplace' element={<Marketplace/>}/>
      <Route path='/farmers' element={<Farmer/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='*' element={<Page404/>}/>

    </Routes>
    
    </>
  )
}

export default App
