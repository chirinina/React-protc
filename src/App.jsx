import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import MainForm from './components/MainForm'
import DocumentView from './components/DocumentView'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Routes>
      <Route path="/view" element={<DocumentView />} />
      <Route 
        path="/" 
        element={
          !isLoggedIn ? 
          <Login onLogin={() => setIsLoggedIn(true)} /> : 
          <MainForm />
        } 
      />
    </Routes>
  )
}
export default App