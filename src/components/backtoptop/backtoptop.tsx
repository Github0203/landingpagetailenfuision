import React, { useState } from "react";
import './backtotop.css';

const Backtotop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div  className="backtotop w-12 h-12"  
         style={{ display: visible ? "inline" : "none" }}
         onClick={scrollToTop}
            >
        </div>
    );
};

export default Backtotop;