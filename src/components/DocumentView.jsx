import { useSearchParams } from 'react-router-dom'

const DocumentView = () => {
  const [searchParams] = useSearchParams()
  
  const getFormattedDate = () => {
    const date = new Date()
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ]
    return `Sucre, ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`
  }

  const data = {
    mscName: searchParams.get('msc') || 'MSC. XX',
    diplomado: searchParams.get('dip') || 'DIPLOMADO EN XX',
    modulo: searchParams.get('mod') || 'MÓDULO EJEMPLO',
    numeroModulo: searchParams.get('num') || 'I',
    contenido: searchParams.get('cont') || 'Contenido mínimo sugerido...',
    fechas: searchParams.get('fchas') || 'Fechas no especificadas',
    fechasEntrega: [...Array(10)].map((_, i) => searchParams.get(`fecha${i}`) || '')
  }

  return (
    <div className="documento">
      <div className="page page2">
        <div className="full-content page2-content">
          <h3>
            <span className="data-field">{data.diplomado}</span>
            – ESAM MONTEAGUNDO
          </h3>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse', 
            textAlign: 'center', 
            fontFamily: 'Arial, sans-serif'
          }}>
            <thead style={{ backgroundColor: '#1f3a68', color: 'white' }}>
              <tr>
                <th>MÓDULO</th>
                <th>CONTENIDO MÍNIMO SUGERIDO</th>
                <th>FECHAS DE<br/>CLASES VIRTUALES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ verticalAlign: 'top', padding: '15px' }}>
                  <strong>{data.numeroModulo}</strong>
                  <p>
                    <strong>MÓDULO:</strong>
                    <span className="data-field">{data.modulo}</span>
                  </p>
                </td>
                <td style={{ verticalAlign: 'top', padding: '15px', textAlign: 'left' }}>
                  <ul style={{ paddingLeft: '20px', margin: 0 }}>
                    <li>{data.contenido}</li>
                  </ul>
                </td>
                <td style={{ verticalAlign: 'middle', padding: '15px', textAlign: 'center' }}>
                  {data.fechas}<br/>
                  <strong>19:00 PM<br/>
                  A<br/>
                  22:00 PM<br/><br/></strong>
                  (4 CLASES)<br/>
                  CADA UNA <br/> DE 3 HORAS<br/><br/><br/>
                  <strong>
                    El cronograma de clases se <br/> gestionará con la <br/> coordinadora académica
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          
          <p><strong>
            ES PRECISO QUE ANTES DEL INICIO DE MÓDULO CARGUE A PLATAFORMA EL
            PLAN ACADÉMICO CURRICULAR MISMO QUE DEBE SER ENVIADO EN PDF
            DEBIDAMENTE LLENADO Y FIRMADO A COORDINACIÓN ACADÉMICA</strong>
          </p>
          <p>
            LINK DE DESCARGA.<br />
            <a
              href="https://drive.google.com/drive/folders/1PQ8TY-lfSIL87QQ_SWjmwGUiRFPj_NZ0?usp=sharing"
              target="_blank"
              rel="noopener noreferrer">
              https://drive.google.com/drive/folders/1PQ8TY-lfSIL87QQ_SWjmwGUiRFPj_NZ0?usp=sharing
            </a>
          </p>
          <p><strong>BIBLIOGRAFÍA:</strong></p>
          <ul style={{ listStylePosition: 'inside', paddingLeft: 0 }}>
            <li style={{ lineHeight: '1.5' }}>Comité Ejecutivo de la Universidad Boliviana [CEUB]. (2011). 
              Reglamento General de Estudios de Postgrado de la Universidad Boliviana. La Paz, Bolivia.</li>
            <li style={{ lineHeight: '1.5' }}>Reglamento del Sistema Nacional de Estudios de Posgrado de la 
              Universidad Boliviana. (2015). Comité Ejecutivo de la Universidad Boliviana. 
              Secretaría Nacional de Posgrado y Educación Continua. La Paz – Bolivia.</li>
          </ul>   
        </div>
      </div>

      <div className="page page3">
        <div className="full-content page3-content">
          <h3>ACTIVIDADES DE LAS SEMANAS DE AVANCE</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {[...Array(10)].map((_, i) => (
                <tr key={i}>
                  <td style={{ padding: '8px', border: '1px solid black' }}>
                    {[
                      'PRÁCTICO I 20 puntos actividad práctica o cuestionario',
                      'PRÁCTICO II 10 puntos foro 6 días',
                      'ASISTENCIA, PARTICIPACIÓN Y ENCUESTA DE SATISFACCIÓN 10 PUNTOS',
                      'CLASE O FORO PARA ACLARAR DUDAS ÚLTIMO SÁBADO DEL MÓDULO',
                      'TRABAJO FINAL DE MÓDULO 60 PUNTOS',
                      'ENTREGA DE NOTAS',
                      'TRABAJO NIVELACIÓN / RECUPERATORIO',
                      'TRABAJO NIVELACIÓN / RECUPERATORIO 71 PUNTOS',
                      'ENTREGA DE NOTAS DE RECUPERATORIO',
                      'RECUPERATORIO EMERGENTE CUESTIONARIO SE CALIFIQUE DE FORMA AUTOMÁTICA 71 PUNTOS'
                    ][i]}
                  </td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>
                    {[
                      'De acuerdo a la complejidad se sugiere un plazo mínimo de 7 a 10 días...',
                      'El foro se caracteriza por generar interacción y un sano intercambio...',
                      'De acuerdo a lo considerado por el docente',
                      'De 19 a 21:00 pm',
                      'Será visible para los participantes desde el inicio y como fin 7 días...',
                      'El docente debe entregar las calificaciones firmadas',
                      'El docente debe entregar las calificaciones firmadas...',
                      'Trabajo para nivelar el proceso formativo una actividad...',
                      'El docente debe entregar las calificaciones',
                      'Un cuestionario con 2 intentos que se califique de manera automática...'
                    ][i]}
                  </td>
                  <td style={{ padding: '8px', border: '1px solid black' }}>
                    {data.fechasEntrega[i]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Resto del contenido de la página 3 */}
          <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
            <img 
              src="https://i.ibb.co/xtXh5YD2/firma.png" 
              alt="firma" 
              style={{ width: '120px', marginBottom: '1%' }}
            />
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
              <strong><em>Ing. Andrea Lucía Aramayo Martínez</em></strong><br />
              <strong><em>COORDINADORA ACADÉMICA</em></strong><br />
              <strong><em>ESAM MONTEAGUNDO</em></strong><br />
              <em>Cel: 73360695</em>
            </p>
            <img 
              src="https://i.ibb.co/j2B0MBm/cello-final.png" 
              alt="cello" 
              style={{ position: 'absolute', top: 0, right: 0, width: '152px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentView