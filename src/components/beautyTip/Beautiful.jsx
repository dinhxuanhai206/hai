import React from "react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineRight} from "react-icons/ai"
import "../../styles/_Beautiful.scss";
import img from "../../asset/image/cs4.jpg";

const BeautifulTip = [
  {
    image: img,
    title: "Nên tẩy da chết hay rửa mặt trước để làm sạch làn da",
    direction: "Nên tẩy da chết hay rửa mặt trước để làm sạch làn da",
    path: "/",
  },
  {
    image: img,
    title: "Ăn gì để trắng da   Nên tẩy da chết hay rửa mặt trước để đẹp",
    direction: "Nên tẩy da chết hay rửa mặt trước để làm sạch làn da",
    path: "/Introduce",
  },
];
const Event = [
  {
    image: img,
    title: "Nên tẩy da chết hay rửa mặt trước để làm sạch làn mặt dể đep ",
    direction: "Nên tẩy da chết hay rửa mặt trước để làm sạch làn da",
    path: "/",
  },
  {
    image: img,
    title: "Ăn gì để trắng da   Nên tẩy da chết hay rửa mặt trước để đẹp",
    direction: "Nên tẩy da chết hay rửa mặt trước để làm sạch làn da ",
    path: "/Introduce",
  },
];

const Beautiful = () => {
    const { pathname } = useLocation();
  return (
    <div className="Beautiful__container">
      <div className="Beautiful-block">
        <div className="beauty-Tip">
          <div className="beauty-Tip-block">
            <h3>TIP LÀM ĐẸP</h3>
            <Link to="/t"  className="link">xem tất cả <AiOutlineRight/></Link>
          </div>
            <div className="beauty-card">
              {BeautifulTip.map((item, i) => (
                <Link to="/introduce" key={i} className="tip-card">
                  <img src={item.image} className="card-img" />
                  <div className="card-title">{item.title}</div>
                  <div className="card-text">{item.direction}</div>
                  <Link to={item.path} className="card-link"> xem thêm</Link>
                </Link>
              ))}
            </div>
        </div>
        <div className="Event">
          <div className="Event-block">
            <h3>SỰ KIỆN</h3>
            <Link to="/s" className="link" >xem tất cả <AiOutlineRight/></Link>
          </div>
          <div className="Event-card">
              {Event.map((item, i) => (
                <Link to="/" key={i} className="tip-card">
                  <img src={item.image} className="card-img" />
                  <div className="card-title">{item.title}</div>
                  <div className="card-text">{item.direction}</div>
                  <Link to={item.path} className="card-link"> xem thêm</Link>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Beautiful;
