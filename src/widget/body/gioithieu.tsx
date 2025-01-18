import React from 'react';
import './body.css';

function Gioithieu() {
    // console.log(secondColor);
  return (
    <div id="gioithieu" className="y-16 bg-white flex-col  justify-center gap-2.5">
    <div className="widthsection self-stretch  items-center gap-8 inline-flex">
      <div className=" grow shrink justify-between items-center gap-8 flex">
        <div className="leftgioithieu flex-col items-start gap-2.5">
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
            <div className="text-[#6939DB] text-4xl font-normal  leading-[95.99px]">Về Talent Fusion</div>
            <div className="self-stretch text-left text-[#05142e] text-2xl font-normal  leading-9">Tự hào là một trong những nhà cung cấp tuyển dụng việc làm lớn nhất Việt Nam.<br/>Với phương châm “Gắn kết mọi nghề nghiệp”, chúng tôi có sẵn các hệ sinh thái tốt nhất để phục vụ cho việc tìm kiếm cũng như mở ra nhiều cơ hội việc làm. </div>
          </div>
        </div>
        <div className="rightgioithieu relative flex-col justify-center items-center gap-8 inline-flex">
          <div className="imagegioithieu left-0 top-0">

          </div>
          <div className="ellipsegioithieu rounded-full blur-[50px]">

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Gioithieu;
