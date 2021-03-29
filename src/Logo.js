import React from 'react';
import Ell from "./Ell.svg";

function Logo(props) {
    return (
        <div className="Logo">
            <div className="Ellipse-logo">
                <img src={Ell} alt="Ell"/>
            </div>

            <div className="Head-logo-text">
                ounter
            </div>
        </div>
    );
}

export default Logo;