import React from 'react';
import './footer.css';

function Footer() {
  return (
  <div id="6" className="footer">
      <div className="widthsection bg-white flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="self-stretch pt-16 bg-[#DEFFDF] flex-col justify-start items-start gap-2.5 flex">
      <div className="widthfull flex-col justify-start items-start gap-10 flex">
        <div className="itemsfooter pt-[60px]  gap-2  pb-5 border-b border-[#DEFFDF] justify-between items-start inline-flex">
          <div className="logofooter">
          <img src={require("../../images/logo.png")} />
          </div>
          <div className="justify-start items-center gap-4 flex">
            <div className="text-[#23262f] text-sm font-semibold leading-normal">Follow Us:</div>
            <div className="justify-start items-start gap-3 flex">
              <div className="facebook relative" />
              <div className="linkedin relative" />
              <div className="twitter relative" />
              <div className="pinterest relative" />
              <div className="instagram relative" />
              <div className="youtube relative" />
            </div>
          </div>
        </div>
        <div className="itemsfooter justify-between items-start gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-5 flex">
              <div className="pr-[17px] pb-0.5 justify-start items-end gap-[17px] inline-flex">
                <div className="w-9 h-9 justify-center items-center inline-flex">
                  <div className="logophonefooter relative">
                  {/* <img src={require("../../images/logophonefooter.svg")} /> */}
                  </div>
                </div>
                <div className="text-left"><span className="text-[#575757]text-left  text-xs font-medium leading-none">Need help? 24/7 <br/></span><span className="text-[#1c1c1c] text-base font-bold leading-relaxed">001-1234-88888</span></div>
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-[#575757] text-sm font-normal text-left leading-snug">Job Searching Just Got Easy. Use Jobtex to run a hiring site and earn money in the process!</div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="iconmapfooter relative" />
                  <div className="text-[#23262f] text-left text-sm font-normal leading-snug">101 E 129th St, East Chicago, IN 46312, US</div>
                </div>
              </div>
            </div>
            <div className="pr-5 flex-col justify-start items-start gap-6 flex">
              <div className="inputsendmailfooter pl-4 bg-white rounded-lg justify-between items-center inline-flex">
                <div className="text-center text-[#b1b1b1] text-sm font-normal leading-snug">Your email address</div>
               
                <div className="px-4 py-[15px] bg-[#6939DB] rounded-tr-lg rounded-br-lg flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="iconguifooter" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-4 inline-flex">
            <div className="text-[#23262f] text-sm font-semibold leading-normal">Việc làm</div>
            <div className="flex-col justify-start items-start gap-[9px] flex">
              <div className="text-[#575757] text-sm font-normal text-left
              leading-snug">Việc làm mới nhất</div>
              <div className="text-[#575757] text-sm font-normal text-left leading-snug">Việc làm IT</div>
              <div className="text-[#575757] text-sm font-normal text-left leading-snug">Việc làm lương cao</div>
              <div className="text-[#575757] text-sm font-normal text-left leading-snug">Việc làm quản lý</div>
              <div className="text-[#575757] text-sm font-normal text-left leading-snug">Việc làm Senior</div>
              <div className="text-[#575757] text-sm font-normal text-left leading-snug">Việc làm bán thời gian</div>
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-4 inline-flex">
            <div className="text-[#23262f] text-left text-sm font-semibold leading-normal">Hồ sơ và CV</div>
            <div className="flex-col justify-start items-start gap-[9px] flex">
              <div className="text-[#575757] text-left text-sm font-normal leading-snug">Quản lý CV</div>
              <div className="text-[#575757] text-left text-sm font-normal leading-snug">Tạo CV</div>
              <div className="text-[#575757] text-left text-sm font-normal leading-snug">Trang trí CV</div>
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-4 inline-flex">
            <div className="text-[#23262f] text-sm font-semibold leading-normal">Cẩm nang nghề nghiệp</div>
            <div className="flex-col justify-start items-start gap-[9px] flex">
              <div className="text-[#575757] text-left text-sm font-normal leading-snug">Định hướng nghề nghiệp</div>
              <div className="text-[#575757] text-left text-sm font-normal leading-snug">Bí kíp tìm việc</div>
              <div className="text-[#575757] text-left text-sm font-normal leading-snug">Kiến thức chuyên ngành</div>
              <div className="text-[#575757] text-left text-sm font-normal leading-snug">Xu hướng nghề nghiệp</div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-7 inline-flex">
            <div className="flex-col justify-center items-start gap-4 flex">
              <div className="text-[#23262f] text-sm font-semibold leading-normal">Về Talent Fusion</div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-[#575757] text-left text-sm font-normal leading-snug">Giới thiệu</div>
                <div className="text-[#575757] text-left text-sm font-normal leading-snug">Liên hệ</div>
                <div className="text-[#575757] text-left text-sm font-normal leading-snug">Hỏi đáp</div>
                <div className="text-[#575757] text-left text-sm font-normal leading-snug">Chính sách bảo mật</div>
                <div className="text-[#575757] text-left text-sm font-normal leading-snug">Điều khoản dịch vụ</div>
                <div className="text-[#575757] text-left text-sm font-normal leading-snug">Quy chế hoạt động</div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-4 inline-flex">
            <div className="text-[#23262f] text-sm font-semibold leading-normal">Download App</div>
            <div className="flex-col justify-center items-start gap-2 flex">
              <div className="chplay relative" />
               
              
              <div className="appstore relative" />
              </div>
          </div>
        </div>
        <div className="itemsfooter py-2 border-t border-[#DEFFDF] justify-between items-center inline-flex">
          <div className="justify-start items-start gap-10 flex">
            <div className="text-[#575757] text-sm font-normal leading-snug">Copyright © 2025 by CardHub. The brand of GoJob Vietnam Technology</div>
            <div className="justify-start items-center gap-2.5 flex">
              <div className=" relative" />
              <div className="text-[#121212] text-sm font-normal leading-snug">English</div>
              <div className="w-3 h-3 px-[1.80px] py-[3.60px] justify-center items-center flex" />
            </div>
          </div>
          <div className="justify-start items-start gap-5 flex">
            <div><span className="text-[#575757] text-sm font-normal leading-snug">Terms Of Services   </span><span className="text-[#ececec] text-sm font-normal leading-snug">| </span><span className="text-[#575757] text-sm font-normal leading-snug">  Privacy Policy  </span><span className="text-[#ececec] text-sm font-normal leading-snug"> |</span><span className="text-[#575757] text-sm font-normal leading-snug">   Cookie Policy</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Footer;
