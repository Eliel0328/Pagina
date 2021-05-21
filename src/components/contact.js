import "../css/contact.scss"
import Shake from "../img/shake.svg"
import { Person, Mail } from "@material-ui/icons"
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={Shake} alt="" />
            </div>
            <div className="right">
                <h2>Contacto</h2>
                <ul>
                    <li>
                        <Person className="icon"></Person>
                        <span>Telefono: </span>
                        <span>+52 55 7333 3886</span>
                    </li>
                    <li>
                        <Mail className="icon"></Mail>
                        <span>Correo Eletronico:</span>
                        <br />
                        <span>eliellopezfelipe0328@gmail.com</span>
                    </li>
                    <li>
                        <GitHubIcon className="icon"></GitHubIcon>
                        <span>Github: </span>
                        <span className="clic"
                            onClick={() => window.open("https://github.com/Eliel0328", "_blank")}>Eliel0328</span>
                    </li>
                    <li>
                        <TwitterIcon className="icon"></TwitterIcon>
                        <span>Twitter: </span>
                        <span className="clic"
                            onClick={() => window.open("https://twitter.com/ElielLF_", "_blank")}>@ElielLF_</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default contact;