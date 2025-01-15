import React from 'react';
import './body.css';

function Caidat() {
  return (
    <div id="4" className="w-[1920px] h-[834px] px-[200px] py-16 bg-white flex-col justify-start items-center gap-8 inline-flex">
    <div className="self-stretch h-[706px] justify-between items-center inline-flex">
      <div className="leftcaidat relative">
        <div className="imagecaidat" />
        <div className="ellipsecaidat rounded-full blur-[50px]"></div>
      </div>
      <div className="rightcaidat grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-[#b32024] text-4xl font-normal font-['Lato'] leading-[95.99px]">Cài đặt</div>
        <div className="self-stretch h-[317.14px] flex-col justify-start items-start gap-8 flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="text-[#05142e] text-4xl font-bold font-['Lato']">Tải xuống phiên bản mới nhất của chúng tôi </div>
            <div className="text-[#758195] text-2xl font-normal font-['Lato']">Dễ dàng tìm kiếm ứng dụng và cài đặt ngay trên điện thoại của bạn</div>
          </div>
          <div className="self-stretch justify-center items-center gap-16 inline-flex">
            <div className="w-[127.56px] flex-col justify-start items-start gap-[10.20px] inline-flex">
              <div className=" w-[127.56px] h-[127.56px] p-[7.09px] bg-[#b32024] rounded justify-start items-center gap-[4.43px] inline-flex">
                <div className="backgroundQR" />
              </div>
              <div className="downloadappstoresetting" />
            </div>
            <div className="w-[127.56px] flex-col justify-start items-start gap-[10.20px] inline-flex">
            <div className=" w-[127.56px] h-[127.56px] p-[7.09px] bg-[#b32024] rounded justify-start items-center gap-[4.43px] inline-flex">
                <div className="backgroundQR" />
              </div>
              <div className="downloadappchplaysetting" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Caidat;
