import inicioCss from "./inicio.module.css"
import { FaWhatsapp, FaArrowRight, FaEnvelope } from "react-icons/fa";

function Inicio(){
    return(
       <section id="inicio" className={inicioCss.inicio}>
            <h1 className={inicioCss.titulo}>Bem-vindo a SamCodex Studio</h1>
            <p className={inicioCss.subtitulo}>Design e soluções criativas para o seu negócio</p>
            <button><FaWhatsapp style={{marginRight:'8px'}}/>Entre em contato</button>

             {/* Botão com ícone à direita */}
      <button style={styles.buttonOutline}>
        Saiba mais
        <FaArrowRight style={{ marginLeft: '8px' }} />
      </button>
      
      {/* Botão só com ícone */}
      <button style={styles.iconButton}>
        <FaEnvelope size={24} />
      </button>
    </section>
    )
}



const styles = {
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'var(--cor-primaria)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px'
  },
  buttonOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'var(--cor-primaria)',
    padding: '10px 20px',
    border: '2px solid var(--cor-primaria)',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px'
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '10px'
  }
}

export default Inicio;