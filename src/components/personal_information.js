import "../css/personal_information.scss"
import ArrowL from "../img/arrow.png"
import ArrowR from "../img/arrow.png"
import senderismo1 from "../img/Senderismo1.jpeg"
import senderismo2 from "../img/Senderismo2.jpeg"
import senderismo3 from "../img/Senderismo3.jpeg"
import Eliel from "../img/Eliel.jpeg"
import Motociclismo from "../img/Motociclismo.jpeg"
import Motociclismo2 from "../img/Motociclismo2.jpeg"
import Motociclismo3 from "../img/Motociclismo3.jpeg"
import Bayern from "../img/Bayern.jpeg"
import Bayern2 from "../img/Bayern.png"
import Bayern4 from "../img/Bayern4.jpeg"
import { useState } from "react"

const Personal_information = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: Eliel,
            title: "Caminar y correr con mi perro",
            desc:
                "Desde muy chico he tenido a Otix conmigo y para que ambos hagamos ejercicio solemos salir a caminar o correr. Disfrutamos mucho de hacer esto juntos.",
            img: senderismo1,
            img2: senderismo2,
            img3: senderismo3,
        },
        {
            id: "2",
            icon: Eliel,
            title: "Motociclismo",
            desc:
                "Realmente me gustaría tener más tiempo libre para poder hacer viajes más largos ya que no lo hago tanto como me gustaría. Me gusta mucho desde que empece a manejar a los 12 años.",
            img: Motociclismo,
            img2: Motociclismo2,
            img3: Motociclismo3,
        },
        {
            id: "3",
            icon: Eliel,
            title: "Fútbol",
            desc:
                "Me gusta jugar Fútbol aunque últimamente disfruto mucho más de ver jugar a mi equipo Favorito que es el Bayern de Múnich, un equipo alemán.",
            img: Bayern,
            img2: Bayern2,
            img3: Bayern4,
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="personal_information" id="personal_information">
            <h1>Hobbies</h1>
            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="leftOfRight">
                                    <img src={d.img} alt="" />
                                </div>
                                <div className="rightOfRight">
                                    <div className="up">
                                        <img src={d.img2} alt="" />
                                    </div>
                                    <div className="down">
                                        <img src={d.img3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={ArrowL} alt="" className="arrow left" onClick={() => handleClick("left")} />
            <img src={ArrowR} alt="" className="arrow right" onClick={() => handleClick()} />

        </div>
    );
}

export default Personal_information;