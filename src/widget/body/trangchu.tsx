import React from 'react';
import './body.css';
import ImacSlider from '../../components/imacslider/imacslider.tsx';

function Trangchu() {
    // console.log(secondColor);
  return (
 <div id="1" className="w-[1920px] h-[994.51px] px-[200px] py-16 flex-col justify-start items-center gap-2.5 inline-flex">
  <div className="self-stretch justify-between items-center inline-flex">
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-[117px] inline-flex">
      <div className="self-stretch h-[460px] flex-col justify-start items-start gap-[65px] flex overflow-hidden">
        <div className="self-stretch h-[335px] flex-col justify-start items-start gap-[65px] flex">
          <div className="w-[626.78px] h-[137px] pb-[0.15px] justify-center items-center inline-flex overflow-hidden">
            <div className="grow shrink basis-0 self-stretch relative">
              <div className="w-[466.14px] h-[55.07px] left-[160.64px] top-[40.91px] absolute">
              </div>
              <div className="w-[137.46px] h-[136.85px] left-0 top-0 absolute">
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="text-[#05142e] text-4xl font-bold LatoBold">Cẩm nang nghề nghiệp</div>
            <div className="self-stretch text-left text-[#758195] text-2xl LatoRegular ">Đăng tin tuyển dụng và làm việc trong cùng 1 ứng dụng. Chỉ với 1 cú click và cài đặt</div>
          </div>
        </div>
        <div className="h-[60px] justify-start items-start gap-2.5 inline-flex">
          <div className="buttonlandingpage self-stretch px-8 rounded-full border border-[#b32024] justify-start items-center gap-2.5 flex">
            <div className="text-[#b32024] text-2xl LatoRegular  leading-9">Đăng ký</div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-center gap-16 inline-flex">
        <div className="w-[203.26px] flex-col justify-start items-start gap-[16.26px] inline-flex">
          <div className="w-[203.26px] h-[203.26px] p-[11.29px] bg-[#b32024] rounded-md justify-start items-center gap-[7.06px] inline-flex">
            <div className="backgroundQR w-[180.67px] h-[180.67px] relative  overflow-hidden" />
          </div>
          <div className="downloadappstore" />
         
        </div>
        <div className="w-[203.26px] flex-col justify-start items-start gap-[16.26px] inline-flex">
          <div className="w-[203.26px] h-[203.26px] p-[11.29px] bg-[#b32024] rounded-md justify-start items-center gap-[7.06px] inline-flex">
            <div className="backgroundQR w-[180.67px] h-[180.67px] relative  overflow-hidden" />
          </div>
          <div className="downloadchplay" />
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
   
      <ImacSlider />
    </div>
  </div>
</div>
  );
}

export default Trangchu;
