import React from 'react';
import './body.css';
import './bodymobile.css';
import IphoneSlider from '../../components/iphoneslider/iphoneslider.tsx';

function Trangchu() {
  
  return (
 <div id="trangchu">
  <div className="trangchu widthsection py-16 flex-col justify-start items-center gap-2.5 inline-flex">
  <div className="self-stretch justify-between items-center inline-flex">
    <div className="leftwidth grow shrink basis-0 flex-col justify-start items-start gap-[64px] inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-[32px] md:gap-[64px] flex overflow-hidden">
        <div className="self-stretchflex-col justify-start items-start gap-[64px] inline-flex">
    
          <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-[#05142e] text-left text-4xl font-bold">Giải pháp danh thiếp điện tử thông minh</div>
            <div className="self-stretch text-left text-[#758195] text-2xl LatoRegular ">Đăng tin tuyển dụng và làm việc trong cùng 1 ứng dụng. Chỉ với 1 cú click và cài đặt</div>
          </div>
        </div>
     
      </div>
      <div className="gap-2">
      <div className="self-stretch justify-center items-center mb-8 gap-16 inline-flex">
        <div className="flex-col justify-start items-start gap-[16.26px] inline-flex">
          <div className="taiaptrangchu  bg-[#6939DB] rounded-md justify-start items-center gap-[7.06px] inline-flex">
            <div className="backgroundQR  relative  overflow-hidden" />
          </div>
          <div className="downloadappstore" />
         
        </div>
        <div className="flex-col justify-start items-start gap-[16.26px] inline-flex">
          <div className="taiaptrangchu  bg-[#6939DB] rounded-md justify-start items-center gap-[7.06px] inline-flex">
            <div className="backgroundQR relative  overflow-hidden" />
          </div>
          <div className="downloadchplay" />
        </div>
      </div>
      <div className="self-stretch text-left text-[#05142e] text-2xl LatoRegular ">Copyright © 2025 by CardHub. The brand of GoJob Vietnam Technology</div>
      </div>
    </div>
    <div className="rightwidth grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
   
      <IphoneSlider />
    </div>
  </div>
  </div>
</div>
  );
}

export default Trangchu;
