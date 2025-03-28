import { useSearchParams } from 'react-router-dom';

const DocumentView = () => {
  const [searchParams] = useSearchParams();
  
  const getFormattedDate = () => {
    const date = new Date();
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    return `Sucre, ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`;
  };

  const data = {
    mscName: searchParams.get('msc') || 'MSC. XX',
    diplomado: searchParams.get('dip') || 'DIPLOMADO EN XX',
    modulo: searchParams.get('mod') || 'MÓDULO EJEMPLO',
    numeroModulo: searchParams.get('num') || 'I',
    contenido: searchParams.get('cont') || 'Contenido mínimo sugerido...',
    fechas: searchParams.get('fchas') || 'Fechas no especificadas',
    fechasEntrega: [...Array(10)].map((_, i) => searchParams.get(`fecha${i}`) || '')
  };

  return (
    <div className="documento">
      {/* Página 1 */}
      <div className="page page1">
        <div className="left-column">
          <div style={{ position: 'relative', marginBottom: '10px' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '128%',
              height: '20px',
              background: 'linear-gradient(to right, #020463, #eb1203)'
            }}></div>
            <img src="https://www.esam.edu.bo/img/logo_unsxx.png" alt="Logo SXX" />
            <img src="https://www.esam.edu.bo/img/logo_esam_principal.png" alt="Logo esam" />
          </div>
          <p style={{ textAlign: 'center' }}>
            <strong>SUCURSAL</strong>
            <span style={{
              display: 'block',
              width: '150px',
              height: '2px',
              margin: '10px auto 0',
              background: 'linear-gradient(to right, #020463, #eb1203)'
            }}></span>
            <br />
            Calle Sucre #976<br />
            FENTE A ENTEL<br/>
            <strong>Escuela de Negocios</strong><br />
            ESAM MONTEAGUDO<br />
            <strong>www.esam.edu.bo</strong>
          </p>
        </div>

        <div className="right-column page1-content">
          <p style={{ textAlign: 'right' }}>{getFormattedDate()}</p>
          <p><strong>Señor/a:</strong></p>
          <p>
            <span className="data-field">{data.mscName}</span><br />
            Presente. -
          </p>
          <p><strong>Ref.: INVITACIÓN</strong></p>
          <p>Estimado docente:</p>
          <p>
            Ante todo, reciba el más cordial de los saludos y deseos de éxito
            en las labores que desempeña en bien del desarrollo de nuestro
            país, conocedores de su amplia experiencia y conocimiento, nos
            permitimos hacerle la presente invitación para que pueda formar
            parte de nuestro selecto plantel docente del programa de {' '}
            <span className="data-field">{data.diplomado}</span>, de esa manera pueda compartir sus conocimientos y experiencias
            con los participantes del mencionado programa, a través de la
            Escuela de Negocios “ESAM”.
          </p>
          <p>
            La ESAM está avalada bajo el Convenio con la Universidad Nacional
            Siglo XX del Estado Plurinacional de Bolivia y cuenta con una
            estructura administrativa a nivel nacional, por lo cual se
            encuentra en la capacidad administrativa y académica para ofertar
            y desarrollar variados programas de formación profesional
            complementaria.
          </p>
          <p>
            Seguros de contar con su valiosa participación, nos despedimos con
            las consideraciones más distinguidas.
          </p>

          <div style={{ 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'space-between',
            marginTop: '80px'
          }}>
            <div style={{ width: '45%', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '14px' }}>
                <strong><em>Ing. Juan Gustavo Quintana Cutipa</em></strong><br />
                <strong><em>PROYECTISTA</em></strong><br />
                <strong><em>ESAM MONTEAGUDO</em></strong><br />
                <em>72947133</em>
              </p>
            </div>
            
            <div style={{ width: '45%', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '14px' }}>
                <strong><em>Ing. Andrea Lucía Aramayo Martínez</em></strong><br />
                <strong><em>COORDINADORA ACADÉMICA</em></strong><br />
                <strong><em>ESAM MONTEAGUDO</em></strong><br />
                <em>73360695</em>
              </p>
            </div>

            <img 
              src="https://i.ibb.co/j2B0MBm/cello-final.png" 
              alt="sello" 
              style={{
                position: 'absolute',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '152px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Página 2 */}
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

      {/* Página 3 */}
      <div className="page page3">
        <div className="full-content page3-content">
          <h3>ACTIVIDADES DE LAS SEMANAS DE AVANCE</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {data.fechasEntrega.map((fecha, i) => (
                <tr key={i}>
                  <td style={{ padding: '8px', border: '1px solid #000' }}>
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
                  <td style={{ padding: '8px', border: '1px solid #000' }}>
                    {[
                      'De acuerdo a la complejidad se sugiere un plazo mínimo de 7 a 10 días, 5 días visibles para el alumno los otros 5 se irán dosificando con coordinación académica para efectivizar la presentación de las mismas con colaboración con el departamento de seguimiento',
                      'El foro se caracteriza por generar interacción y un sano intercambio de conocimientos en el grupo y ampliando el panorama de todos los participantes. Será visible 3 días para los participantes y los otros 3 se irán dosificando con coordinación académica para efectivizar la presentación de las mismas con colaboración con el departamento de seguimiento',
                      'De acuerdo a lo considerado por el docente',
                      'De 19 a 21:00 pm',
                      'Será visible para los participantes desde el inicio y como fin 7 días después de la última actividad y los otros días se irán dosificando con coordinación académica para efectivizar la presentación de las mismas en colaboración con el departamento de seguimiento',
                      'El docente debe entregar las calificaciones firmadas',
                      'El docente debe entregar las calificaciones firmadas, con la retroalimentación respectiva en plataforma para poder habilitar el recuperatorio',
                      'Trabajo para nivelar el proceso formativo una actividad de las antes presentadas',
                      'El docente debe entregar las calificaciones',
                      'Un cuestionario con 2 intentos que se califique de manera automática vencimiento 3 días'
                    ][i]}
                  </td>
                  <td style={{ padding: '8px', border: '1px solid #000' }}>{fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ textAlign: 'justify' }}>
            Las tareas deben tener un plazo mínimo de 7 a 9 días y para dar el tiempo suficiente a cada participante de realizar la misma y poder reforzar lo aprendido viendo los videos de las grabaciones, de esta manera el área académica puede realizar el seguimiento correspondiente a los participantes.
            Usted como docente debe informar mediante el grupo de WhatsApp al momento en el que habilita una actividad en la plataforma, las actividades deben tener como hora de finalización las 23:59pm.
            Las calificaciones se deben registrar por su persona en nuestra Plataforma Virtual, de forma obligatoria, debiendo, además, enviar la planilla de notas firmada por su persona; en un plazo hasta 7 días luego de culminadas las sesiones sincrónicas y la última fecha de presentación de actividades.
          </p>

          {/* Resto del contenido de la página 3 */}
          <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
            <img 
              src="https://i.ibb.co/xtXh5YD2/firma.png" 
              alt="firma" 
              style={{ width: '120px', marginBottom: '1%' }}
            />
            <p style={{ margin: 0, fontSize: '14px' }}>
              <strong><em>Ing. Andrea Lucía Aramayo Martínez</em></strong><br />
              <strong><em>COORDINADORA ACADÉMICA</em></strong><br />
              <strong><em>ESAM MONTEAGUNDO</em></strong><br />
              <em>Cel: 73360695</em>
            </p>
            <img 
              src="https://i.ibb.co/j2B0MBm/cello-final.png" 
              alt="sello" 
              style={{ 
                position: 'absolute', 
                top: '0', 
                right: '0', 
                width: '152px' 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentView;