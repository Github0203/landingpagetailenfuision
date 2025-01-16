import React, { useState } from 'react';
import './header.css';
import '../../components/colors.tsx';
import { Link } from "react-scroll";



function Header() {
const [activeTrangchu, setactiveTrangchu] = useState(false);
const [activeGioithieu, setactiveGioithieu] = useState(false);
const [activeNganhnghe, setactiveNganhnghe] = useState(false);
const [activeCaidat, setactiveCaidat] = useState(false);
const [activeLienhe, setactiveLienhe] = useState(false);

function handleSetActiveTrangchu(){
  setactiveTrangchu : true;
  setactiveGioithieu : false;
  setactiveNganhnghe : false;
   activeCaidat : false;
   setactiveLienhe : false;
}

function handleSetActiveGioithieu(){
  setactiveTrangchu : false;
  setactiveGioithieu : true;
  setactiveNganhnghe : false;
   activeCaidat : false;
   setactiveLienhe : false;
}

function handleSetActiveNganhnghe(){
  setactiveTrangchu : false;
  setactiveGioithieu : false;
  setactiveNganhnghe : true;
   activeCaidat : false;
   setactiveLienhe : false;
}

function handleSetActiveCaidat(){
  setactiveTrangchu : false;
  setactiveGioithieu : false;
  setactiveNganhnghe : false;
   activeCaidat : true;
   setactiveLienhe : false;
}

function handleSetActiveLienhe(){
  setactiveTrangchu : false;
  setactiveGioithieu : false;
  setactiveNganhnghe : false;
   activeCaidat : false;
   setactiveLienhe :true;
}

  return (
    <div className="header justify-center items-center inline-flex" style={{backgroundColor: 'FFEEEE'}}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className='logo'>
            </div>
            <div className="menu">
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className=" px-4 py-2.5 bg-[#ffeeee] rounded-full justify-center items-center gap-2.5 flex">
                  <Link
            activeClass="active"
            to="1"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={this.handleSetActive}
          >
           <div className="text-[#b32024] text-xl font-bold  leading-7"
           onClick={() => handleSetActiveTrangchu(

           )}
           >Trang chủ</div>
          </Link>
                    
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                  <Link
            activeClass="active"
            to="2"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className="text-[#b32024] text-xl font-bold  leading-7">Giới thiệu</div>
          </Link>
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                  <Link
            activeClass="active"
            to="3"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className="text-[#b32024] text-xl font-bold  leading-7">Ngành nghề</div>
          </Link>
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                  <Link
            activeClass="active"
            to="4"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className="text-[#b32024] text-xl font-bold  leading-7">Cài đặt</div>
          </Link>
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                  <Link
            activeClass="active"
            to="5"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className="text-[#05142e] text-xl font-bold  leading-7">Liên hệ</div>
          </Link>
                  </div>
                </div>
            </div>
            <div className="buttonlandingpage h-12 px-8 py-4 rounded-full border border-[#b32024] justify-start items-center gap-2.5 inline-flex">
              <div className="text-[#b32024] text-2xl font-normal  leading-9">Đăng ký</div>
            </div>
            </div>
         </div>
    </div>
  );
}

export default Header;




// import React from "react";
// import { Link } from "react-scroll";

// const Nav = () => {
//   return (
//     <div className="nav">
//       <ul>
//         <li>
//           <Link
//             activeClass="active"
//             to="1"
//             spy={true}
//             smooth={true}
//             duration={500}
//           >
//             link page1
//           </Link>
//         </li>
//         <li>
//           <Link
//             activeClass="active"
//             to="2"
//             spy={true}
//             smooth={true}
//             duration={500}
//           >
//             link page2
//           </Link>
//         </li>
//         <li>
//           <Link
//             activeClass="active"
//             to="2"
//             spy={true}
//             smooth={true}
//             duration={500}
//           >
//             link page3
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default Nav;
