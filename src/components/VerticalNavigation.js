import React from "react";
import {NavLink} from "react-router-dom";
import Yoga from "../assets/icon-yoga.svg";
import Swim from "../assets/icon-swim.svg";
import Cycle from "../assets/icon-cycle.svg";
import Weight from "../assets/icon-weight.svg";

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
                <NavLink to="#"><img src={Yoga} alt="Yoga" className="vertical-navigation-image"/></NavLink>
                <NavLink to="#"><img src={Swim} alt="Swim" className="vertical-navigation-image"/></NavLink>
                <NavLink to="#"><img src={Cycle} alt="Cycle" className="vertical-navigation-image"/></NavLink>
                <NavLink to="#"><img src={Weight} alt="Weight" className="vertical-navigation-image"/></NavLink>
            </div>
            <NavLink to="#" className="vertical-navigation-copyright">Copyright SportSee 2020</NavLink>
        </nav>
    );
}

export default VerticalNavigation;