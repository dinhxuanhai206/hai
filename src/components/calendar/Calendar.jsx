import React, {useState} from 'react'
import Lich from "../../asset/image/datlich.png"
import {
    AiOutlineClose,
  } from "react-icons/ai";

import "../../styles/_Calendar.scss"
const Calendar = () => {
    const [open, setOpen] = useState(false);

    const handelOpen = () => {
        setOpen(true); // mở to hình
      };
  return (
    <div className='Calendar__container'>
        {open && (
        <div className="Calendar__slice">
          <AiOutlineClose className="Calendar__slice-close" onClick={()=> setOpen(false)}/>
          <div className="sliceWrapper">
             hai
          </div>
        </div>
      )}
      <div className='Calendar__block'>
         <div className='Calendar__block-container'>
             <div className='Calendar-content'>
                    <h1>
                    ĐẶT LỊCH TRỰC TUYẾN
                    </h1>
                    <p>Nhanh tay đăng ký để nhận được nhiều ưu đãi nhất.</p>
                    <button></button>
             </div>
            
         </div>
         <div className='Calendar-image'>
            <img src={Lich}/>
         </div>
      </div>
    </div>
  )
}

export default Calendar