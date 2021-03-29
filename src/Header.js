import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {
    return (
        <header className="Header">
            <Logo/>
            <Menu/>
        </header>
    );
}

export default Header;