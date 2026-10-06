import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ 
        backgroundImage: `url('/src/assets/background2.png')`,
        backgroundColor: '#B0936C' 
      }}
    >
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage />} />
        </Routes>
      </main>

      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  )
}

export default App