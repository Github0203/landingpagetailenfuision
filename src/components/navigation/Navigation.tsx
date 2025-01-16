import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="1"
            spy={true}
            smooth={true}
            duration={500}
          >
            link page1
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth={true}
            duration={500}
          >
            link page2
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth={true}
            duration={500}
          >
            link page3
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
