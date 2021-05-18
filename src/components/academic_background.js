import "../css/academic_background.scss"
import List from './academic_background_list'
import villa from '../img/logoVilla.png'
import escom from '../img/logoEscom.png'
import cecyteo from '../img/logoCecyteo.jpg'
import { useState, useEffect } from 'react'
import {
    cvList,
    formacionList, skillsList,
} from "./data";

const Academic_background = () => {
    const [selected, setSelected] = useState("formacion");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "formacion",
            title: "Formación académica",
        },
        {
            id: "skills",
            title: "Skills",
        },
        {
            id: "cv",
            title: "Curriculum Vitae",
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "formacion":
                setData(formacionList);
                break;
            case "skills":
                setData(skillsList);
                break;
            case "cv":
                setData(cvList);
                break;
        }
    }, [selected]);

    return (
        <div className="academic_background" id="academic_background">
            <h1>Formación académica y Habilidades</h1>
            <ul>
                {list.map((item) => (
                    <List
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {/* {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))} */}

                <div className="item">
                    <img src={villa} alt=""
                        onClick={() => window.open("https://www.facebook.com/villadelosninosguadalajaraoficial/", "_blank")} />
                    <h3>Villa de los Niños</h3>
                </div>
                <div className="item">
                    <img src={escom} alt=""
                        onClick={() => window.open("https://www.escom.ipn.mx/", "_blank")} />
                    <h3>Escuela Superior de Cómputo</h3>
                </div>
                <div className="item">
                    <img src={cecyteo} alt=""
                        onClick={() => window.open("http://www.cecyteo.edu.mx/Nova/Site/OfertaEducativa?e=96&c=PLANTEL%20N%C3%9AM.%2028%20AYOTZINTEPEC&longitud=-96.1288220&latitud=17.6728730", "_blank")} />
                    <h3>Cecyteo PL. 28</h3>
                </div>
            </div>
        </div>

    );
}

export default Academic_background;

