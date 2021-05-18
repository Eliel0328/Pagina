import "../css/navbar.scss"
import {Person, Mail} from "@material-ui/icons"

const Navbar = ({menuOpen, setMenuOpen}) => {
    return (  
        <nav className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#contact" className="logo">López Felipe Eliel</a>
                    <div className="itemContainer">
                        <Person className="icon"></Person>
                        <span>+52 55 73333 3886</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"></Mail>
                        <span>eliellopezfelipe@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;