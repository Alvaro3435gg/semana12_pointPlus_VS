import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ShoppingScreen from './components/ShoppingScreen.jsx';
import CodePage from './components/CodePage.jsx';
import './components/App.css';
import CameraPage from "./components/CameraPage.jsx";

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="navbar">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">shoppingScreen</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ShoppingScreen />} />
                        <Route path="/code" element={<CodePage />} />
                        <Route path="/camera" element={<CameraPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
