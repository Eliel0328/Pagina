import "../css/academic_background.scss"
import List from './academic_background_list'
import { Link } from 'react-router-dom'
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

    const descargarCV = () => {
        document.location = '../cv.pdf'
    }

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
            default:
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
                {data.map((d) => (
                    <div className={selected === 'skills' ? "item skills" : (selected === 'cv' ? 'item cv' : 'item')}>
                        <img
                            src={d.img}
                            alt=""
                            onClick={d.clic !== null ? () => (d.cv === true ? descargarCV() : window.open(d.clic, "_blank")) : null}
                        />
                        <a href="/home/emile/Documentos/Crypto/portafolio/src/cv.pdf" download="CV.pdf"> descargar archivo</a>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Academic_background;

