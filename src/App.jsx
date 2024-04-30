import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import OurFood from './Components/OurFood'
import AboutUs from './Components/AboutUs'
import SignIn from './Components/SignIn'


function App() {
  const [count, setCount] = useState(0)

  function handleAdd(){
    setCount(count+1);
  }
  return (
    <>
        <BrowserRouter>
        <Header count={count}/>
        <Routes>
          <Route path='/' element={<Home handleAdd={handleAdd}/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/ourfoods' element={<OurFood handleAdd={handleAdd}/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
