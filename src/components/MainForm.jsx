import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Download, Share2, History, Mail } from 'lucide-react'

const MainForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    mscName: '',
    diplomado: '',
    modulo: '',
    numeroModulo: '',
    contenido: '',
    fechas: '',
    fechasEntrega: Array(10).fill('')
  })
  
  const [processing, setProcessing] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')

  const handleProcess = (e) => {
    e.preventDefault()
    if (!formData.mscName || !formData.diplomado || !formData.modulo) {
      alert('Complete los campos obligatorios')
      return
    }

    setProcessing(true)
    
    setTimeout(() => {
      const params = new URLSearchParams({
        msc: formData.mscName,
        dip: formData.diplomado,
        mod: formData.modulo,
        num: formData.numeroModulo,
        cont: formData.contenido,
        fchas: formData.fechas,
        ...formData.fechasEntrega.reduce((acc, val, idx) => {
          acc[`fecha${idx}`] = val
          return acc
        }, {})
      })

      const entry = {
        timestamp: new Date().toISOString(),
        url: `/view?${params.toString()}`
      }
      
      const history = JSON.parse(localStorage.getItem('docHistory') || '[]')
      localStorage.setItem('docHistory', JSON.stringify([...history, entry]))
      
      setProcessing(false)
      navigate(`/view?${params.toString()}`)
    }, 2000)
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Enlace copiado al portapapeles')
    } catch (err) {
      alert('Error al copiar el enlace')
    }
  }

  const handleSendEmail = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Correo inválido')
      return
    }

    const mailto = `mailto:${email}?subject=Documento ESAM&body=Enlace al documento: ${window.location.href}`
    window.open(mailto)
    setShowEmailForm(false)
    setEmail('')
  }

  const handleFechaChange = (index, value) => {
    const newFechas = [...formData.fechasEntrega]
    newFechas[index] = value
    setFormData({...formData, fechasEntrega: newFechas})
  }

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Generador de plantillas ESAM</h1>
        <p>Completa los campos y presiona <strong>PROCESAR</strong></p>

        <form onSubmit={handleProcess}>
          {/* Campo Nombre del Docente */}
          <div className="form-group">
            <label>Msc. (Docente)</label>
            <input
              type="text"
              value={formData.mscName}
              onChange={(e) => setFormData({...formData, mscName: e.target.value})}
              placeholder="Ej: Msc. Juan Pérez"
              required
            />
          </div>

          {/* Campo Diplomado */}
          <div className="form-group">
            <label>Diplomado en</label>
            <input
              type="text"
              value={formData.diplomado}
              onChange={(e) => setFormData({...formData, diplomado: e.target.value})}
              placeholder="Ej: Diplomado en Gestión"
              required
            />
          </div>

          {/* Campo Módulo */}
          <div className="form-group">
            <label>Módulo (Título)</label>
            <input
              type="text"
              value={formData.modulo}
              onChange={(e) => setFormData({...formData, modulo: e.target.value})}
              placeholder="Ej: Módulo de Proyectos"
              required
            />
          </div>

          {/* Campo Número de Módulo */}
          <div className="form-group">
            <label>Número de Módulo</label>
            <input
              type="text"
              value={formData.numeroModulo}
              onChange={(e) => setFormData({...formData, numeroModulo: e.target.value})}
              placeholder="Ej: I, II, III..."
            />
          </div>

          {/* Campo Contenido */}
          <div className="form-group">
            <label>Contenido</label>
            <textarea
              value={formData.contenido}
              onChange={(e) => setFormData({...formData, contenido: e.target.value})}
              placeholder="Contenido mínimo sugerido..."
              rows="4"
            />
          </div>

          {/* Campo Fecha de Clases */}
          <div className="form-group">
            <label>Fecha de clases</label>
            <input
              type="date"
              value={formData.fechas}
              onChange={(e) => setFormData({...formData, fechas: e.target.value})}
            />
          </div>

          {/* Campos de Fechas de Entrega */}
          <div className="form-group">
            <h3>Fechas de Entrega</h3>
            <div id="fechasContainer">
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="fecha-input-group">
                  <label>Fecha de entrega {index + 1}</label>
                  <input
                    type="date"
                    value={formData.fechasEntrega[index]}
                    onChange={(e) => handleFechaChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="btn" 
            disabled={processing}
          >
            {processing ? (
              <>
                <span className="loader"></span>
                Procesando...
              </>
            ) : (
              'PROCESAR'
            )}
          </button>
        </form>

        <div className="action-container">
          <button className="btn" onClick={() => window.print()}>
            <Download color="#0609be" />
          </button>
          <button className="btn" onClick={handleShare}>
            <Share2 color="#05976b" />
          </button>
          <button className="btn" onClick={() => setShowHistory(true)}>
            <History color="#e0dd03" />
          </button>
          <button className="btn" onClick={() => setShowEmailForm(true)}>
            <Mail color="#ff0000" />
          </button>
        </div>

        {showEmailForm && (
          <div className="email-form">
            <input
              type="email"
              placeholder="Correo del destinatario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="email-buttons">
              <button className="btn-enviar" onClick={handleSendEmail}>
                Enviar
              </button>
              <button className="btn-cancelar" onClick={() => setShowEmailForm(false)}>
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainForm