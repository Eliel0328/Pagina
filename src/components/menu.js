import '../css/menu.scss'

const menu = ({menuOpen, setMenuOpen}) => {
    return (  
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#home">Inicio</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#academic_background">Formación Académica</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#personal_information">Informacion Personal</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#cryptography">Acerca de Criptografía</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#contact">Contacto</a>
                </li>
            </ul>
        </div>
    ); 
}
 
export default menu;