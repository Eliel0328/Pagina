import "./css/app.scss"
import { useState } from 'react'
import Menu from './components/menu'
import Home from './components/home'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Cryptography from './components/cryptography'
import Academic from './components/academic_background'
import Information from './components/personal_information'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Navbar 
                menuOpen={menuOpen} 
                setMenuOpen={setMenuOpen}>
            </Navbar>
            <Menu
                menuOpen={menuOpen} 
                setMenuOpen={setMenuOpen}>
            </Menu>
            <div className="sections">
                <Home></Home>
                <Academic></Academic>
                <Information></Information>
                <Cryptography></Cryptography>
                <Contact></Contact>

            </div>
        </div>
    );
}

export default App;


