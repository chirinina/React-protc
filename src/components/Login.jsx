import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const validUsers = {
    'usuario1': 'pass1',
    'admi': 'admi123',
    'jquintanacutipa': '10381927Ch'
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (validUsers[username] === password) {
      onLogin()
      setError('')
    } else {
      setError('Credenciales incorrectas')
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: error ? 'red' : '' }}
          />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: error ? 'red' : '' }}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn">Ingresar</button>
        </form>
      </div>
      <div className="login-image">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984" alt="Workspace" />
        <div className="image-content">
          <h2>Bienvenido a ESAM</h2>
          <p>Accede a tu cuenta para generar nueva carta</p>
        </div>
      </div>
    </div>
  )
}

export default Login