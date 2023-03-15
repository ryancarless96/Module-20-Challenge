import React from 'react';
import { Link } from 'react-router-dom';
import "../../components/nav.css";

function Nav() {
    return (
        <div className="nav">
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="links">
                <Link to='https://ryancarless96.github.io/How-to-Build-Websites/' target='_blank'>How to Build Websites</Link>
                <Link to='https://ryancarless96.github.io/prework-study-guide/' target='_blank'>Prework</Link>
                <Link to='https://ryancarless96.github.io/Quiz-Game-Challenge/' target='_blank'>Group-Project-1</Link>
                <Link to='https://safe-eyrie-62856.herokuapp.com/login' target='_blank'>Group-Project-2</Link>
            </div>
        </div>
    )
}

export default Nav;