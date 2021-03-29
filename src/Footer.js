import React from 'react';
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <footer>
            <FooterLogo/>
            <FooterMenu/>
            <Copyright/>
        </footer>
    );
}

export default Footer;