import React from "react";
import {NavLink} from "react-router-dom/dist/index";
import Yoga from "../../assets/icon-yoga.svg";
import Swim from "../../assets/icon-swim.svg";
import Cycle from "../../assets/icon-cycle.svg";
import Weight from "../../assets/icon-weight.svg";
import * as Constants from "../../resources/Constants";

/**
 * Vertical navigation component displayed in the <aside>.
 *
 * @returns {*}
 * @constructor
 */
function VerticalNavigation() {
    return (
        <nav className="vertical-navigation">
            <div className="vertical-navigation-images">
                <NavLink to="/user/12"><img src={Yoga} alt="Yoga" className="vertical-navigation-image"/></NavLink>
                <NavLink to="/user/18"><img src={Swim} alt="Swim" className="vertical-navigation-image"/></NavLink>
                <NavLink to="#"><img src={Cycle} alt="Cycle" className="vertical-navigation-image"/></NavLink>
                <NavLink to="#"><img src={Weight} alt="Weight" className="vertical-navigation-image"/></NavLink>
            </div>
            <NavLink to="#" className="vertical-navigation-copyright">{Constants.COPYRIGHT_TEXT}</NavLink>
        </nav>
    );
}

export default VerticalNavigation;