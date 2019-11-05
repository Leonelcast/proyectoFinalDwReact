import React, { Component } from 'react';
import './Header.css';
import { Menu,MenuItem } from 'react-foundation';

class Header extends Component {
    render() {
        return (
            
            <div className="menu-basics-example">
                <Menu>
                
                    <MenuItem><a id="white">Inicio</a></MenuItem>
                    <MenuItem><a id="white">Tendencias</a></MenuItem>
                    <MenuItem><a id="white">Internacionales</a></MenuItem>
                </Menu>
            </div>

        )
    }
}

export default Header;