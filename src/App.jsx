import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// We'll create these components next
import Login from './components/Login'
import OAuthCallback from './components/OAuthCallback'
import AdSearch from './components/AdSearch'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/oauth-callback" element={<OAuthCallback />} />
          <Route path="/" element={<AdSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App