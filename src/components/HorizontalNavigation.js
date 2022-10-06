import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../assets/logo-sportsee.svg";

/**
 * Horizontal navigation component displayed in the <header>.
 *
 * @returns {*}
 * @constructor
 */
function HorizontalNavigation() {
    return (
        <nav className="horizontal-navigation">
            <NavLink to="#"><img src={Logo} alt="SportSee logo" className="horizontal-navigation-image"/></NavLink>
            <NavLink to="#" className="horizontal-navigation-menu">Accueil</NavLink>
            <NavLink to="#" className="horizontal-navigation-menu">Profil</NavLink>
            <NavLink to="#" className="horizontal-navigation-menu">Réglage</NavLink>
            <NavLink to="#" className="horizontal-navigation-menu">Communauté</NavLink>
        </nav>
    );
}

export default HorizontalNavigation;