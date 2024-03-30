import React from 'react';
import './styles.css'; // import the CSS file

const Menu = () => {
    return (
        <div className="menu-container">
            <h2>Menu</h2>
            <ul>
                <li className="menu-item">Lemon Chicken</li>
                <li className="menu-item">Lemon Pasta</li>
                <li className="menu-item">Lemon Tart</li>
            </ul>
        </div>
    );
}

export default Menu;
