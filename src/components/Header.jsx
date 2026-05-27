import headerCss from "./header.module.css"

function Header(){
    return(
        <header>
            <div className={headerCss.logo}>Meu Logo</div>
            <nav>
                <a href="#" className={headerCss.link}>Inicio</a>
                <a href="#" className={headerCss.link}>Sobre</a>
                <a href="#" className={headerCss.link}>Serviços</a>
                <a href="#" className={headerCss.link}>Contatos</a>
            </nav>
        </header>
    )
}

export default Header;