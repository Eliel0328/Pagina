import "../css/cryptography.scss"
import Leon from "../img/Leon.jpg"
import Key from "../img/Key.png"

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const Cryptography = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const data = [
        {
            id: 1,
            name: "Llave Público",
            title: "",
            img: Key,
            desc:
                "Llave Pública.",
            bottom: "Mostrar Pk",
            datos: "RSA",
            datos1: "RSA",
            datos2: "RSA",
        },
        {
            id: 2,
            name: "Leon Battista Alberti",
            title: "Criptógrafo de la época medieval",
            img: Leon,
            desc:
                "La criptografía medieval, abarca la misma época medieval (del 476 a 1492). Durante este periodo de tiempo, se dieron muchos casos de criptografía, sin embargo, uno de los más sobresalientes fue el de Leon Battista Alberti, quien creo el denominado cifrado de Trithemius... ",
            featured: true,
            bottom: "Mostrar más",
            datos: "La criptografía medieval, abarca la misma época medieval (del 476 a 1492). Durante este periodo de tiempo, se dieron muchos casos de criptografía, sin embargo, uno de los más sobresalientes fue el de Leon Battista Alberti, quien creo el denominado cifrado de Trithemius, que era una criptografía bastante similar a la empleada por Julio César, sin embargo, tenía un nivel de complejidad mucho mayor.",
            datos1: "Antes que nada, primero hay que saber un poco sobre Leon Battista, quien nació en el año 1404 y falleció en 1472. Battista fue un arquitecto y secretario de tres papas diferentes, además, también fue un destacado músico, filósofo y lingüista.\nPor otra parte, también es considerado como uno de los humanista más importantes del renacimiento; y su contribución a la criptografía realizada en el año 1465, con la creación del cifrado Trithemius, también lo hacen ganar un puesto en la historia, al menos en la historia de la criptografía.",
            datos2: "\nAhora bien, el cifrado de Trithemius trataba de la creación de un cuadro con columnas y filas. En la primera fila, se colocaban todas las letras del abecedario iniciando por la A y finalizando en la Z, en la segunda fila, se colocaba todo el abecedario, pero empezando en la B y finalizando en la A, así progresivamente.\nAl momento de cifrar un mensaje, básicamente se iniciaba tomando como referencia la primera fila, pero al colocar la segunda letra, había que ubicarse en la segunda fila, pero tomando como referencia la primera; es decir, que si se iba a colocar el mensaje «aa», para su cifrado, quedaría «ab», pues la segunda fila comenzaba con la letra B.\nEsto es algo que podía variar, dependiendo de los espacios que se debieran correr para la toma de letras, y es en este punto, donde esta criptografía se asemeja mucho a la realizada por Julio César, casi 1500 años antes.",

        },

    ];


    return (
        <div className="cryptography" id="cryptography">
            <h1>Acerca de la Criptografía</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img
                                className="user"
                                src={d.img}
                                alt=""
                            />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="btn">
                            <div>
                                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                    {d.bottom}
                                </Button>
                                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                        {d.title}
                                    </DialogTitle>
                                    <DialogContent dividers>
                                        <Typography gutterBottom>
                                            {d.datos}
                                        </Typography>
                                        <Typography gutterBottom>
                                            {d.datos1}
                                        </Typography>
                                        <Typography gutterBottom>
                                            {d.datos2}
                                        </Typography>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Continuar
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Cryptography;

