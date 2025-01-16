import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = ({ hash }) => {
  const location = useLocation();

  useEffect(() => {
    let id = hash ? hash : location.hash;
    const element = document.getElementById(id);
    console.log(location.hash);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0
      });
    }, 100);
  }, [location]);

  return null;
};

ScrollHandler.propTypes = {};

export default ScrollHandler;
