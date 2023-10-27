import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShoppingScreen from './ShoppingScreen.jsx';
import About from './About';
/*import './App.css';*/
import Button from "./Button.jsx";
import MainUserHome from "./pages/mainUserHome/mainUserHome.jsx";

function App() {
    return (
       /* <Router>
            <div className="app-container">
                <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/"></Link>
                            </li>
                            <li>
                                <Link to="/about"></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ShoppingScreen />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <div>
                        <Button text={'hola'}/>
                        <Button text={'xd'}/>
                    </div>
                </div>
            </div>
        </Router>*/
        <><MainUserHome/></>
    );
}

export default App;
