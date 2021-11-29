import React from "react";
import "./Hamburger.css";

const Hamburger =({handleHamburger, isHamburgerClicked})=>{
    return(
        <div className="hamburger" onClick={handleHamburger}>
            <div className={isHamburgerClicked}></div>
            <div className={isHamburgerClicked}></div>
        </div>
    )
}

export default Hamburger