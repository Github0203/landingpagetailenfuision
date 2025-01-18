import React from 'react';
import './body.css';

function Caidat() {
  return (
    <div id="caidat" className="sm:px-16 bg-white sm:flex-col  gap-8 
    
    ">
    <div className="widthsection self-stretch justify-between items-center inline-flex">
      <div className="leftcaidat relative">
        <div className="imagecaidat" />
        <div className="ellipsecaidat rounded-full blur-[50px]"></div>
      </div>
      <div className="rightcaidat grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="text-[#6939DB] text-4xl font-normal  leading-[95.99px]">Cài đặt</div>
        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
          <div className="flex-col justify-start items-start gap-8 flex">
            <div className="text-[#05142e] text-4xl font-bold ">Tải xuống phiên bản mới nhất của chúng tôi </div>
            <div className="text-[#758195] text-2xl font-normal ">Dễ dàng tìm kiếm ứng dụng và cài đặt ngay trên điện thoại của bạn</div>
          </div>
          <div className="self-stretch justify-center items-center gap-16 inline-flex">
            <div className="codecaidat flex-col justify-start items-start gap-[10.20px] inline-flex">
              <div className="qrcodecaidat bg-[#6939DB] rounded justify-start items-center gap-[4.43px] inline-flex">
                <div className="backgroundQR" />
              </div>
              <div className="downloadappstoresetting" />
            </div>
            <div className="codecaidat flex-col justify-start items-start gap-[10.20px] inline-flex">
            <div className="qrcodecaidat bg-[#6939DB] rounded justify-start items-center gap-[4.43px] inline-flex">
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
