import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useEffect, useRef } from "react";
import logo from "../../asset/image/logo-spa-1.png";
import Banner from "../../asset/image/BANNER-CSD-VÀNG-1200-630.jpg";
import "../../styles/_Header.scss";

const mainNav = [
  {
    id: 1,
    display: "Trang Chủ",
  },
  {
    id: 2,
    display: "Về chúng tôi",
  },
  {
    id: 3,
    display: "Dịch vụ",
  },
  {
    id: 4,
    display: "Kết quả điều trị",
  },
  {
    id: 5,
    display: "Đào tạo spa",
  },
  {
    id: 6,
    display: "Tip làm đẹp",
  },
  {
    id: 7,
    display: "Tuyển dụng",
  },
];

const Header = () => {
 
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="header_top-time">
          <AiOutlineClockCircle
            style={{
              marginRight: "10px",
              marginBottom: "-2px",
            }}
          />
          8:30 - 19:30, Thứ 2 - CN(kể cả ngày lễ, tết)
        </div>
      </div>
      <div className="container">
        <div className="header__logo"><img src={logo}/></div>
          <div className="header__menu ">
            {mainNav.map((item, index) => (
              <ul className="menu">
                <li key={item} className="menu_li">{item.display}</li>
              </ul>
            ))}
          </div>
      </div>
      <div>
        <img src={Banner} />
      </div>
    </div>
  );
};

export default Header;
