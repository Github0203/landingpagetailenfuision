import React, { useState, useEffect } from 'react';
import './header.css';
import '../../components/colors.tsx';
import { Link } from "react-scroll";



function OpenHeaderMenuMobile() {
const [activeTrangchu, setactiveTrangchu] = useState(false);
const [activeGioithieu, setactiveGioithieu] = useState(false);
const [activeNganhnghe, setactiveNganhnghe] = useState(false);
const [activeCaidat, setactiveCaidat] = useState(false);
const [activeLienhe, setactiveLienhe] = useState(false);

function handleSetActiveTrangchu(){
  setactiveTrangchu(true);
  setactiveGioithieu(false);
  setactiveNganhnghe(false);
   setactiveCaidat(false);
   setactiveLienhe(false);
}

function handleSetActiveGioithieu(){
  setactiveTrangchu(false);
  setactiveGioithieu(true);
  setactiveNganhnghe(false);
   setactiveCaidat(false);
   setactiveLienhe(false);
}

function handleSetActiveNganhnghe(){
  setactiveTrangchu (false);
  setactiveGioithieu (false);
  setactiveNganhnghe (true);
   setactiveCaidat (false);
   setactiveLienhe (false);
}

function handleSetActiveCaidat(){
  setactiveTrangchu (false);
  setactiveGioithieu (false);
  setactiveNganhnghe (false);
   setactiveCaidat (true);
   setactiveLienhe (false);
}

function handleSetActiveLienhe(){
  setactiveTrangchu (false);
  setactiveGioithieu (false);
  setactiveNganhnghe (false);
   setactiveCaidat (false);
   setactiveLienhe (true);
}



    



  return ( 
    <div className="menudivmobile" >
      
    <div className="header">
        <div className="container">
          <div className="divmenu flex-col justify-center items-center gap-8 inline-flex">
            <div className='justify-center items-center inline-flex'>
              <div className='logo'>
            </div>
            
            </div>
            <div className="menu flex-col justify-between items-between gap-4 inline-flex">
                  <div className="itemmenu">
                  <Link
            activeClass=""
            to="trangchu"
            spy={true}
            smooth={true}
            duration={500}
            // onSetActive={this.handleSetActiveTrangchu()}
          >
           <div className={`text-xl font-bold  leading-7 ${activeTrangchu ? 'text-[#6939DB]' : 'text-[#05142e]'}` }
           onClick={() => handleSetActiveTrangchu()}
           >Trang chủ</div>
          </Link>
                    
                  </div>
                  <div className="itemmenu">
                  <Link
            activeClass=""
            to="gioithieu"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl font-bold  leading-7 ${activeGioithieu ? 'text-[#6939DB]' : 'text-[#05142e]'}` }
           onClick={() => handleSetActiveGioithieu()}
           >Giới thiệu</div>
          </Link>
                  </div>
                  <div className="itemmenu ">
                  <Link
            activeClass=""
            to="nganhnghe"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl font-bold  leading-7 ${activeNganhnghe ? 'text-[#6939DB]' : 'text-[#05142e]'}` }
           onClick={() => handleSetActiveNganhnghe()}
           >Ngành nghề</div>
          </Link>
                  </div>
                  <div className="itemmenu ">
                  <Link
            activeClass=""
            to="caidat"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl font-bold  leading-7 ${activeCaidat ? 'text-[#6939DB]' : 'text-[#05142e]'}` }
           onClick={() => handleSetActiveCaidat()}
           >Cài đặt</div>
          </Link>
                  </div>
                  <div className="itemmenu ">
                  <Link
            activeClass=""
            to="lienhe"
            spy={true}
            smooth={true}
            duration={500}
          >
           <div className={`text-xl font-bold  leading-7 ${activeLienhe ? 'text-[#6939DB]' : 'text-[#05142e]'}` }
           onClick={() => handleSetActiveLienhe()}
           >Liên hệ</div>
          </Link>
                  </div>
            </div>
            <div className="dangkytrangchu h-[60px] justify-center items-center gap-2.5 inline-flex">
          <div className="buttonlandingpage self-stretch px-8 rounded-full border border-[#6939DB] justify-center items-center gap-2.5 flex">
            <div className="text-[#6939DB] text-2xl LatoRegular  leading-9">Đăng ký</div>
          </div>
        </div>
            </div>
         </div>
    </div>
   
        </div>

  );
}

export default OpenHeaderMenuMobile;



