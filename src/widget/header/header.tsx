import React, { useState } from 'react';
import './header.css';
import '../../components/colors.tsx';
import { Link } from "react-scroll";



function Header() {
const [activeTrangchu, setactiveTrangchu] = useState(false);
const [activeGioithieu, setactiveGioithieu] = useState(false);
const [activeNganhnghe, setactiveNganhnghe] = useState(false);
const [activeCaidat, setactiveCaidat] = useState(false);
const [activeBangGia, setactiveBangGia] = useState(false);

function handleSetActiveTrangchu(){
  setactiveTrangchu(true);
  setactiveGioithieu(false);
  setactiveNganhnghe(false);
   setactiveCaidat(false);
   setactiveBangGia(false);
}

function handleSetActiveGioithieu(){
  setactiveTrangchu(false);
  setactiveGioithieu(true);
  setactiveNganhnghe(false);
   setactiveCaidat(false);
   setactiveBangGia(false);
}

function handleSetActiveNganhnghe(){
  setactiveTrangchu (false);
  setactiveGioithieu (false);
  setactiveNganhnghe (true);
   setactiveCaidat (false);
   setactiveBangGia (false);
}

function handleSetActiveCaidat(){
  setactiveTrangchu (false);
  setactiveGioithieu (false);
  setactiveNganhnghe (false);
   setactiveCaidat (true);
   setactiveBangGia (false);
}

function handleSetActiveBangGia(){
  setactiveTrangchu (false);
  setactiveGioithieu (false);
  setactiveNganhnghe (false);
   setactiveCaidat (false);
   setactiveBangGia (true);
}


 const [visibleMenuFixed, setVisibleMenuFixed] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
          setVisibleMenuFixed(true);
        } else if (scrolled <= 300) {
          setVisibleMenuFixed(false);
        }
    };


    
    window.addEventListener("scroll", toggleVisible);

  return (
    <div className="menudiv">
    <div className="header justify-center items-center inline-flex" style={{
      backgroundColor: visibleMenuFixed ? '#fff' : '#DEFFDF', 
      // display: visibleMenuFixed ? "block" : "none", 
      position: visibleMenuFixed ? "fixed" : "relative", 
      top: visibleMenuFixed ? 0 : 'auto',
      left: visibleMenuFixed ? 0 : 'auto',
      boxShadow: visibleMenuFixed ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' : 'none',
      }}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className='logo'>
            </div>
            <div className="menu">
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className=" px-4 py-2.5 ">
                  <Link
            activeClass=""
            to="trangchu"
            spy={true}
            smooth={true}
            duration={500}
            // onSetActive={this.handleSetActiveTrangchu()}
          >
           <div className={`text-xl classNameleading-7 ${activeTrangchu ? 'text-[#6939DB]' : 'text-[#05142e]'}
           ${activeTrangchu ? 'font-bold' : 'font-normal'}
           ` }
           onClick={() => handleSetActiveTrangchu()}
           >Trang chủ</div>
          </Link>
                    
                  </div>
                  <div className=" px-4 py-2.5 ">
                  <Link
            activeClass=""
            to="gioithieu"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl classNameleading-7 
           ${activeGioithieu ? 'text-[#6939DB]' : 'text-gray-500'}
           ${activeGioithieu ? 'font-bold' : 'font-normal'}
           ` }
           onClick={() => handleSetActiveGioithieu()}
           >Giới thiệu</div>
          </Link>
                  </div>
                  <div className=" px-4 py-2.5 ">
                  <Link
            activeClass=""
            to="nganhnghe"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl classNameleading-7 ${activeNganhnghe ? 'text-[#6939DB]' : 'text-[#05142e]'}
           ${activeNganhnghe ? 'font-bold' : 'font-normal'}
           ` }
           onClick={() => handleSetActiveNganhnghe()}
           >Ngành nghề</div>
          </Link>
                  </div>
                  <div className=" px-4 py-2.5 ">
                  <Link
            activeClass=""
            to="caidat"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl classNameleading-7 ${activeCaidat ? 'text-[#6939DB]' : 'text-[#05142e]'}
           ${activeCaidat ? 'font-bold' : 'font-normal'}
           ` }
           onClick={() => handleSetActiveCaidat()}
           >Cài đặt</div>
          </Link>
                  </div>
                  <div className=" px-4 py-2.5 ">
                  <Link
            activeClass=""
            to="banggia"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl classNameleading-7 ${activeBangGia ? 'text-[#6939DB]' : 'text-[#05142e]'}
           ${activeBangGia ? 'font-bold' : 'font-normal'}
           ` }
           onClick={() => handleSetActiveBangGia()}
           >Bảng giá</div>
          </Link>
                  </div>
                </div>
            </div>
            <div className="buttonlandingpage h-12 px-8 py-4 rounded-full border border-[#6939DB] justify-start items-center gap-2.5 inline-flex">
              <div className="text-[#6939DB] text-2xl font-normal  leading-9">Đăng ký</div>
            </div>
            </div>
         </div>
    </div>
    </div>
  );
}

export default Header;



