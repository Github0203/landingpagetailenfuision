import React from 'react';
import './header.css';
import '../../components/colors.tsx';
// console.log(secondColor);
function Header() {
    // console.log(secondColor);
  return (
    <div className="header justify-center items-center inline-flex" style={{backgroundColor: 'FFEEEE'}}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className='logo'>
            </div>
            <div className="menu">
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className=" px-4 py-2.5 bg-[#ffeeee] rounded-full justify-center items-center gap-2.5 flex">
                    <div className="text-[#b32024] text-xl font-bold  leading-7">Trang chủ</div>
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                    <div className="menuitem text-[#05142e] text-xl font-bold  leading-7">Giới thiệu</div>
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                    <div className="menuitem text-[#05142e] text-xl font-bold  leading-7">Ngành nghề</div>
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                    <div className="menuitem text-[#05142e] text-xl font-bold  leading-7">Cài đặt</div>
                  </div>
                  <div className=" px-4 py-2.5 rounded-full justify-center items-center gap-2.5 flex">
                    <div className="menuitem text-[#05142e] text-xl font-bold  leading-7">Liên hệ</div>
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
