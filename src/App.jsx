import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import { ThemeProvider } from './Contexts/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
          </Routes>
          
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
