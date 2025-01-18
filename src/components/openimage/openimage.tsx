import React, { useState, useEffect } from "react";
import './openimage.css';

function OpenImage (props) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [dispalyOverlay, setdispalyOverlay] = useState(true);

    useEffect(() => {
      const handleResizeWidth = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWidth);
      return () => window.removeEventListener("resize", handleResizeWidth);
    }, []);
  
    useEffect(() => {
      const handleResizeHeight = () => setHeight(window.innerHeight);
      window.addEventListener("resize", handleResizeHeight);
      return () => window.removeEventListener("resize", handleResizeHeight);
    }, []);
  
        var widthScreen = Number(width);
        var widthHeight = Number(height);

    function closeOverlayHandel(){
        setdispalyOverlay(false);
    }

    return (
        <div  className="openimage" style={{width: widthScreen, height: widthHeight,
            display: dispalyOverlay ? "block" : "none"
        }}> 
        <div className="image" style={{ background:"url(" + {props} + ")"}}></div >
        <div className="closeoverlay fixed top-16 right-16 z-50 w-full h-full" 
        onClick={() => closeOverlayHandel()}
        ></div >
        </div>
        
    );
};

export default OpenImage;