import React, { useState } from "react";
import "../../styles/Scars/_LogSeou.scss";
import app from "../../asset/image/app-store.jpg";
import chplay from "../../asset/image/google-play.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import img from "../../asset/image/log1.jpg";
import img1 from "../../asset/image/log2.jpg";
import {
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const logImages = [
  {
    id: 1,
    image: img,
  },
  {
    id: 2,
    image: img1,
  },
  {
    id: 3,
    image: img,
  },
  {
    id: 4,
    image: img1,
  },
  {
    id: 5,
    image: img,
  },
  {
    id: 6,
    image: img1,
  },
];

const LogSeou = () => {
  const [slice, setSlice] = useState(0);
  const [open, setOpen] = useState(false);

  const handelOpen = (i) => {
    setSlice(i); // set lại theo mảng  từng hình
    setOpen(true); // mở to hình
  };

  const handelMove = (direction) => {
    let newSlice;
    if (direction === "l") {
      newSlice = slice === 0 ? 5 : slice - 1; //qua trái
    } else {
      newSlice = slice === 5 ? 0 : slice + 1; // qua phải
    }

    setSlice(newSlice);
  };
  return (
    <div className="logSeou__container">
      {open && (
        <div className="Equi__slice">
          <AiOutlineClose
            className="Equi__slice-close"
            onClick={() => setOpen(false)}
          />
          <AiOutlineArrowLeft
            className="arrow"
            onClick={() => handelMove("l")}
          />
          <div className="sliceWrapper">
            <img
              src={logImages[slice].image}
              alt=""
              className="Equi__slice-image"
            />
          </div>
          <AiOutlineArrowRight
            className="arrow"
            onClick={() => handelMove("r")}
          />
        </div>
      )}
      <div className="logSeou-title">ĐĂNG KÝ NGAY TẠI SEOULSPA</div>
      <div className="logSeou-btnlist">
        <button className="logSeou-btn">Dịch vụ đa dạng</button>
        <button className="logSeou-btn">Có chỗ để xe</button>
        <button className="logSeou-btn">Hỗ trợ trả góp 0%</button>
      </div>
      <div className="logSeou-block">
        <div className="logSeou-title">ĐẶT LỊCH TRÊN ỨNG DỤNG</div>
        <div>
          <img src={app} alt="" className="app-img" />
          <img src={chplay} alt="" className="chplay-img" />
        </div>
      </div>
      <div className="logSeou-service">
        <div className="logSeou-title">
          THẨM MỸ VIỆN SEOUL SPA - ĐẲNG CẤP DỊCH VỤ HÀNG ĐẦU
        </div>
        <div className="logSeou-blocktext">
          <div className="blocktext-left">
            <p>
              <GoPrimitiveDot
                style={{
                  marginRight: "5px",
                  marginBottom: "-3.5px",
                }}
              />
              Hiệu quả dịch vụ chứng minh bằng văn bản.
            </p>
            <p>
              <GoPrimitiveDot
                style={{
                  marginRight: "5px",
                  marginBottom: "-3.5px",
                }}
              />
              Đảm bảo quyền lợi cho từng khách hàng.
            </p>
            <p>
              <GoPrimitiveDot
                style={{
                  marginRight: "5px",
                  marginBottom: "-3.5px",
                }}
              />
              Bác sĩ da liễu giàu kinh nghiệm.
            </p>
          </div>
          <div className="blocktext-right">
            <p>
              <GoPrimitiveDot
                style={{
                  marginRight: "5px",
                  marginBottom: "-3.5px",
                }}
              />
              Kỹ thuật viên có đầy đủ chứng chỉ spa - thẩm mỹ.
            </p>
            <p>
              <GoPrimitiveDot
                style={{
                  marginRight: "5px",
                  marginBottom: "-3.5px",
                }}
              />
              Phác đồ điều trị chuyên biệt, khoa học.
            </p>
            <p>
              <GoPrimitiveDot
                style={{
                  marginRight: "5px",
                  marginBottom: "-3.5px",
                }}
              />
              Cơ sở vật chất, trang thiết bị hiện đại.
            </p>
          </div>
        </div>
      </div>
      <div className="logSeou-imgWrapper">
      {logImages.map((logImage, i) => (
            <div className="imgWrapper-item" key={i}>
              <img
                src={logImage.image}
                className="logSeou-img"
                onClick={() => handelOpen(i)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default LogSeou;
