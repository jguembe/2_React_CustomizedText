import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>{this.props.titulo}</h1>
                <p>Encuadra las letras tu párrafo!</p>
            </div>
        )
    }
}

export default Header;
