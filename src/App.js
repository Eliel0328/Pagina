import "./css/app.scss"
import { useState } from 'react'
import CV from './components/cv'
import Menu from './components/menu'
import Home from './components/home'
import Navbar from './components/navbar'
import Contact from './components/contact'
import Cryptography from './components/cryptography'
import Academic from './components/academic_background'
import Information from './components/personal_information'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Router>
            <div className="app">
                <Navbar
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}>
                </Navbar>
                <Menu
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}>
                </Menu>
                <Switch>
                    <Route exact path="/">
                        <div className="sections">
                            <Home></Home>
                            <Academic></Academic>
                            <Information></Information>
                            <Cryptography></Cryptography>
                            <Contact></Contact>
                        </div>
                    </Route>
                    <Route exact path="/components/cv">
                        <CV></CV>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;


