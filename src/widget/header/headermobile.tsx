import React, {useState, useEffect} from 'react';
import './header.css';
import OpenHeaderMenuMobile from './openheadermobile.tsx';



function HeaderMobile() {

const [visibleMenuFixed, setVisibleMenuFixed] = useState(false);
const [dispalyOverlay, setdispalyOverlay] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
          setVisibleMenuFixed(true);
        } else if (scrolled <= 300) {
          setVisibleMenuFixed(false);
        }
    };

      const [width, setWidth] = useState(window.innerWidth);
      const [height, setHeight] = useState(window.innerHeight);
    
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
      

        function openOverlayHandel(){
            setdispalyOverlay(!dispalyOverlay);
        }
      

    window.addEventListener("scroll", toggleVisible);
   

  return ( 
<div className="menuheadermobile justify-between items-center inline-flex"
style={{
    width: visibleMenuFixed ? width : '',
    backgroundColor: visibleMenuFixed ? '#fff' : '#DEFFDF', 
    // display: visibleMenuFixed ? "block" : "none", 
    position: visibleMenuFixed ? "fixed" : "relative", 
    top: visibleMenuFixed ? 0 : '0',
    left: visibleMenuFixed ? 0 : '0',
    boxShadow: visibleMenuFixed ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' : 'none',
    }}>
<div className="justify-between items-center inline-flex" style={{width: width-46}}>
<div className="menuheadermobileleft"
onClick={() => openOverlayHandel()}
/>
  <div className="grow shrink basis-0 h-7 justify-center items-center flex">
  <div className="menuheadermobileright"/>
  </div>
</div>
<div className="openmenumobileclick" style={{
    display: dispalyOverlay ? "block" : "none", 
    height: height,
    width: width,
    position: dispalyOverlay ? "fixed" : "relative",
    top: dispalyOverlay ? 0 : '0',
    left: dispalyOverlay ? 0 : '0', 
    }}>
<OpenHeaderMenuMobile />
<div className="closeoverlay"
        onClick={() => openOverlayHandel()}
        ></div >
</div>
</div>

  );
}

export default HeaderMobile;

