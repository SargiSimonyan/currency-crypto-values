import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Data from './components/data'
function App() {

  return (
    <>
      <Navbar/>
      <Layout/>
      <Header/>
    </>
  )
}

export default App
