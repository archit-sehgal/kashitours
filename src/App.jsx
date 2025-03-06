import { useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Services from './components/Services';

function App() {

  return (
    <Router>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      </Routes>
    </Router>
  )
}

export default App
