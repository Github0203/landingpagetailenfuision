import React, {useState, useEffect } from 'react';
import './body.css';

function Nganhnghe() {
    // console.log(secondColor);
    const [displayImage, setDispalyOverlay] = useState(false);
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);
    console.log(image1);
    console.log(image2);
    console.log(image3);
    console.log(image4);
  return (
    <div id="nganhnghe" className="content-between">
      <OpenImage />
    <div className="widthsection nganhnghetop sm:py-16 py-4 flex-col justify-start items-center gap-8 inline-flex">
      <div className="text-[#6939DB] text-4xl font-normal  leading-[95.99px]">Tính năng</div>
      <div className="self-stretch justify-start items-center  gap-[32px] inline-flex">
        <div className="itemnganhnghe workitem grow shrink basis-0 h-[200px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 p-8 bg-[#e9f4fe] rounded-lg flex-col justify-center items-start gap-[18px] flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-[60px] h-[60px] bg-[#6939DB] rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-8 h-8 relative icon1">
                </div>
              </div>
              <div className="text-[#05142e] text-xl font-semibold leading-[30px]">Tính năng</div>
            </div>
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 text-[#758195] text-base font-normal text-left leading-normal">Lựa chọn nghề nghiệp trong tương lai dựa trên các tiêu chí như: khả năng, sở thích, tính cách.</div>
            </div>
          </div>
        </div>
        <div className="itemnganhnghe workitem grow shrink basis-0 h-[200px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 p-8 bg-[#e9f4fe] rounded-lg flex-col justify-center items-start gap-[18px] flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-[60px] h-[60px] bg-[#6939DB] rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-8 h-8 justify-center items-center gap-2.5 flex icon2" />
              </div>
              <div className="text-[#05142e] text-xl font-semibold  leading-[30px]">Kiến thức chuyên ngành</div>
            </div>
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 text-[#758195] text-base font-normal text-left leading-normal">Là một trong những yếu tố quan trọng quyết định trị giá của bạn đối với doanh nghiệp.</div>
            </div>
          </div>
        </div>
        <div className="itemnganhnghe workitem grow shrink basis-0 h-[200px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 p-8 bg-[#e9f4fe] rounded-lg flex-col justify-center items-start gap-[18px] flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-[60px] h-[60px] bg-[#6939DB] rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-8 h-8 relative icon3">
                </div>
              </div>
              <div className="text-[#05142e] text-xl font-semibold  leading-[30px]">Bí kiếp việc làm</div>
            </div>
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 text-[#758195] text-base font-normal text-left leading-normal">Vô số bí kíp có sẵn sẽ giúp bạn hiểu thế nào là một CV sáng giá giữa hàng chồng hồ sơ ứng tuyển.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-8 inline-flex">
      <div className="workitem grow shrink basis-0 h-[200px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="itemnganhnghe self-stretch grow shrink basis-0 p-8 bg-[#e9f4fe]  rounded-lg flex-col justify-center items-start gap-[18px] flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-[60px] h-[60px] bg-[#6939DB] rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-8 h-8 relative icon4">
                </div>
              </div>
              <div className="text-[#05142e] text-xl font-semibold leading-[30px]">Cơ hội việc làm</div>
            </div>
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 text-[#758195] text-base font-normal text-left leading-normal">Nơi quy tụ và đón đầu hàng trăm cơ hội tuyển dụng lớn đến từ hơn 90 doanh nghiệp, tập đoàn trong và ngoài nước.</div>
            </div>
          </div>
        </div>
        <div className="workitem grow shrink basis-0 h-[200px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="sitemnganhnghe elf-stretch grow shrink basis-0 p-8 bg-[#e9f4fe] rounded-lg flex-col justify-center items-start gap-[18px] flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-[60px] h-[60px] bg-[#6939DB] rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-[22.40px] h-8 relative icon3">
                </div>
              </div>
              <div className="text-[#05142e] itemnganhnghe text-xl font-semibold text-left leading-[30px]">Bí kiếp việc làm</div>
            </div>
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 text-[#758195] text-base font-normal text-left leading-normal">Vô số bí kíp có sẵn sẽ giúp bạn hiểu thế nào là một CV sáng giá giữa hàng chồng hồ sơ ứng tuyển.</div>
            </div>
          </div>
        </div>
        <div className="itemnganhnghe workitem grow shrink basis-0 h-[200px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 p-8 bg-[#e9f4fe] rounded-lg flex-col justify-center items-start gap-[18px] flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="w-[60px] h-[60px] bg-[#6939DB] rounded-full justify-center items-center gap-2.5 flex">
                <div className="w-8 h-8 justify-center items-center gap-2.5 flex icon5" />
              </div>
              <div className="text-[#05142e] text-xl font-semibold  leading-[30px]">Kiến thức chuyên ngành</div>
            </div>
            <div className="self-stretch justify-start items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 text-[#758195] text-base font-normal text-left leading-normal">Là một trong những yếu tố quan trọng quyết định trị giá của bạn đối với doanh nghiệp.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="widthsection nganhnghebottom sm:py-16 py-4 flex-col justify-start items-center gap-8 inline-flex">
      <div className="self-stretch nganhnghebottom1 justify-start items-center overflow-hidden inline-flex">
        <div className="itemtinhnang grow shrink basis-0 flex-col justify-start items-start gap-1 ">
          <div className="text-[#6939DB] text-4xl font-normal  leading-[95.99px]">Nghề nghiệp</div>
          <div className="self-stretch h-[173px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-left text-[#758195] text-2xl font-normal ">Talent cung cấp tất cả các nghề nghiệp hiện nay trên tổ quốc Việt Nam.</div>
            <div className="self-stretch h-32 flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="iconcheck"></div>
                <div className="text-[#05142e] text-2xl font-normal leading-9">Dễ tìm kiếm</div>
              </div>
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="iconcheck"></div>
                <div className="text-[#05142e] text-2xl font-normal  leading-9">Dễ ứng tuyển</div>
              </div>
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="iconcheck"></div>
                <div className="text-[#05142e] text-2xl font-normal  leading-9">Dễ tuyển dụng</div>
              </div>
            </div>
          </div>
        </div>
        <div className="itemtinhnang grow shrink basis-0 flex-col justify-between items-center gap-2.5 inline-flex">
          <div className="groupimgtinhnang relative">
              <div className="hinhtinhnang1 w-[250.72px] h-[110.17px] left-0 top-0 absolute rounded-[16px]" 
              onClick={() => openPopup1()}
              />
            <div className="hinhtinhnang2 w-[175.51px] h-[110.17px] left-[75.64px] top-[151.36px] absolute rounded-[16px]"
            onClick={() => openPopup2()}
            >
              
            </div>
            <div className="hinhtinhnang3 w-[250.72px] h-[521.94px] left-[291.28px] top-0 absolute rounded-[16px]"
            onClick={() => openPopup3()}
            >
             
            
            </div>
            <div className="hinhtinhnang4 w-[421.66px] h-[227.92px] left-0 top-[297.71px] absolute rounded-xl border-8 border-white"
            onClick={() => openPopup4()}
            >
              
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch nganhnghebottom2 justify-between items-center inline-flex overflow-hidden">
        <div className="nganhnghebottom2left self-stretch flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="self-stretch h-[350px] rounded-2xl border-4 border-white flex-col justify-start items-start gap-2.5 flex overflow-hidden">
          <div className="video-container">
                <iframe src="https://www.youtube.com/embed/SV4lbsaBLuI"
                        frameBorder="0">
                </iframe>
          </div>
          </div>
        </div>
        <div className="nganhnghebottom2right flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start flex">
            <div className="h-24 p-4  justify-start items-start inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="w-14 h-14 py-1 rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                  <div className="icon6 self-stretch grow shrink basis-0 relative">
                  </div>
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="self-stretch text-center text-[#2c3e5d] text-sm font-bold leading-normal">Nhân sự - Hành chính - Văn phòng</div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="px-2 py-1 bg-[#f7f8f9] rounded-3xl justify-start items-center gap-1 flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="rounded-[100px] justify-start items-center gap-1 flex">
                          <div className="py-1 flex-col justify-center items-center gap-2 inline-flex">
                            <div className="self-stretch text-center text-[#2c3e5d] text-sm font-normal leading-none">1.932</div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="justify-start items-center gap-1 flex">
                          <div className="text-[#2c3e5d] text-sm font-normal leading-none">Việc làm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-24 p-4   justify-start items-start inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="w-14 h-14 py-1 rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                  <div className="icon7 w-10 h-10 relative  overflow-hidden" />
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="self-stretch text-center text-[#2c3e5d] text-sm font-bold capitalize leading-normal">Tiếp thị, quảng cáo/ Truyền thông</div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="px-2 py-1 bg-[#f7f8f9] rounded-3xl justify-start items-center gap-1 flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="rounded-[100px] justify-start items-center gap-1 flex">
                          <div className="py-1 flex-col justify-center items-center gap-2 inline-flex">
                            <div className="self-stretch text-center text-[#2c3e5d] text-sm font-normal leading-none">1.932</div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="justify-start items-center gap-1 flex">
                          <div className="text-[#2c3e5d] text-sm font-normal leading-none">Việc làm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-24 p-4  justify-start items-start inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="icon9 w-14 h-14 relative  overflow-hidden" />
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="self-stretch text-center text-[#2c3e5d] text-sm font-bold capitalize leading-normal">Chăm sóc khách hàng/ Vận hành</div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="px-2 py-1 bg-[#f7f8f9] rounded-3xl justify-start items-center gap-1 flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="rounded-[100px] justify-start items-center gap-1 flex">
                          <div className="py-1 flex-col justify-center items-center gap-2 inline-flex">
                            <div className="self-stretch text-center text-[#2c3e5d] text-sm font-normal leading-none">1.932</div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="justify-start items-center gap-1 flex">
                          <div className="text-[#2c3e5d] text-sm font-normal leading-none">Việc làm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-24 p-4  justify-start items-start inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="w-14 h-14 py-1 rounded-2xl flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                  <div className="icon10 w-8 h-8 px-[0.50px] py-[1.70px] justify-center items-center inline-flex overflow-hidden" />
                </div>
                <div className="flex-col justify-center items-start gap-2 inline-flex">
                  <div className="self-stretch text-center text-[#2c3e5d] text-sm font-bold capitalize leading-normal">Nhân sự/ hành chính/ pháp chế</div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="px-2 py-1 bg-[#f7f8f9] rounded-3xl justify-start items-center gap-1 flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="rounded-[100px] justify-start items-center gap-1 flex">
                          <div className="py-1 flex-col justify-center items-center gap-2 inline-flex">
                            <div className="self-stretch text-center text-[#2c3e5d] text-sm font-normal leading-none">1.932</div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="justify-start items-center gap-1 flex">
                          <div className="text-[#2c3e5d] text-sm font-normal leading-none">Việc làm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );

 function openPopup1(){
  setDispalyOverlay(!displayImage);
  setImage1(true);
  setImage2(false);
  setImage3(false);
  setImage4(false);
 }
 function openPopup2(){
  setDispalyOverlay(!displayImage);
  setImage1(false);
  setImage2(true);
  setImage3(false);
  setImage4(false);
 }
 function openPopup3(){
  setDispalyOverlay(!displayImage);
  setImage1(false);
  setImage2(false);
  setImage3(true);
  setImage4(false);
 }
 function openPopup4(){
  setDispalyOverlay(!displayImage);
  setImage1(false);
  setImage2(false);
  setImage3(false);
  setImage4(true);
 }
  function OpenImage () {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [dispalyOverlay, setdispalyOverlay] = useState(true);

    useEffect(() => {
      const handleResizeWidth = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResizeWidth);
      return () => window.removeEventListener("resize", handleResizeWidth);
    }, []);
  
    useEffect(() => {
      const handleResizeHeight = () => setHeight(window.innerHeight);
      window.addEventListener("resize", handleResizeHeight);
      return () => window.removeEventListener("resize", handleResizeHeight);
    }, []);
  
        var widthScreen = Number(width);
        var widthHeight = Number(height);
        function closePopup(){
          setDispalyOverlay(!dispalyOverlay);
         }
    return (
        <div  className="openimage" style={{width: widthScreen, height: widthHeight,
            display: displayImage ? "block" : "none"
        }}> 
        <div className="image1" style={{display : image1 ? "block" : "none"}}></div >
        <div className="image2" style={{display : image2 ? "block" : "none"}}></div >
        <div className="image3" style={{display : image3 ? "block" : "none"}}></div >
        <div className="image4" style={{display : image4 ? "block" : "none"}}></div >
        <div className="closeoverlay" 
        onClick={() => closePopup()}
        ></div >
        </div>
        
    );

}
}

export default Nganhnghe;



