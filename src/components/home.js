import '../css/home.scss'
import man from '../img/Eliel2.jpeg'
import down from '../img/down.png'

import { init } from "ityped";
import { useEffect, useRef } from 'react';

const Home = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Programador", "Estudiante", "Apasionado de la computación"],
          });
    }, []);

    return (       
       <div className="home" id="home">
           <div className="left">
                <div className="imgContainer">
                    <img src={man} alt="" />
                </div>
           </div>
           <div className="right">
                <div className="wrapper">
                    <h2>Hola, yo soy</h2>
                    <h1>Eliel López</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#academic_background">
                    <img src={down} alt="" />
                </a>
           </div>
       </div>
    );
}
 
export default Home;

