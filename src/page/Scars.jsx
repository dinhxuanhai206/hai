import React, { useState } from "react";
import "../styles/Scars/_Scars.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Scroll from "../components/Scroll";
import calendar from "../components/calendar/Calendar";
import Branch from "../components/branch/Branch";
import Footer from "../components/footer/Footer";
import Comments from "../components/comments/Comments";
import img from "../asset/image/-tri-seo-ro-1-1.png";
import img1 from "../asset/image/tri-seo-ro-2.jpg";
import img2 from "../asset/image/tri-seo-ro-3.jpg";
import img3 from "../asset/image/tri-seo-ro-4.png";
import img4 from "../asset/image/tri-seo-ro-5.jpg";
import img5 from "../asset/image/tri-seo-ro-6.jpg";
import img6 from "../asset/image/tri-seo-ro-7.jpg";
import img7 from "../asset/image/tri-seo-ro-8.jpg";
import img8 from "../asset/image/tri-seo-ro-9.jpg";
import img9 from "../asset/image/tri-seo-ro-10.jpg";
import img10 from "../asset/image/tri-seo-ro-11.jpg";
import img11 from "../asset/image/tri-seo-ro-12.jpg";
import img12 from "../asset/image/tri-seo-ro-13.jpg";
import img13 from "../asset/image/tri-seo-ro-14.jpg";
import img14 from "../asset/image/tri-seo-ro-15.png";
import img15 from "../asset/image/tri-seo-ro-16.jpg";
import img16 from "../asset/image/tri-seo-ro-17.jpg";
import img17 from "../asset/image/tri-seo-ro-27.jpg";
import img18 from "../asset/image/r1.jpg";
import img19 from "../asset/image/r2.jpg";
import img20 from "../asset/image/r3.jpg";
import img21 from "../asset/image/r4.jpg";
import img22 from "../asset/image/r5.jpg";

import { GoPrimitiveDot } from "react-icons/go";
import LogSeou from "../components/logSeou/LogSeou";
import Calendar from "../components/calendar/Calendar";

const Scars = () => {
  const [open1, setOpen1] = useState(false);
  const handelOpen1 = () => {
    setOpen1(true); // mở to hình
  };
  return (
    <>
      <Header />
      <div className="Scars__container">
        {/* Mở form chat box */}
        {open1 && (
          <div className="requestion">
            <div class="Chatbox" id="myForm">
              <AiOutlineClose
                className="Calendar__slice-close"
                onClick={() => setOpen1(false)}
              />
              <form action="" class="form-container">
                <h1>Chat Box</h1>
                <textarea
                  placeholder="Bạn hãy nhập lời nhắn.."
                  name="msg"
                  required
                ></textarea>
                <button type="submit" class="btn">
                  Gửi
                </button>
              </form>
            </div>
          </div>
        )}
        {/* Đóng form chat box */}
        <div className="Scars-block">
          {/* menu bđ */}
          <ul className="Scars-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/">Điều Trị Sẹo Rỗ</Link>
            </li>
          </ul>
          {/* menu kt */}
          <div className="line"></div>
          {/* Nội dung bài viết bđ */}
          <div className="Scars-content">
            <div className="Scars-content-left">
              <div className="content-left-title">Trị sẹo rỗ</div>
              {/* nút yêu cầu bđ*/}
              <button className="Advise-btn" onClick={() => handelOpen1()}>
                <BiMessageDetail
                  style={{
                    paddingRight: "6px",
                    fontSize: "30px",
                    marginBottom: "-9px",
                  }}
                />
                YÊU CẦU TƯ VẤN
              </button>
              {/* nút yêu cầu kt */}
              <p className="content-left-text">
                Cơn mưa mụn qua đi để lại những vệt thâm in hằn trên mặt, nó là
                nỗi đau mà chắc hẳn ai đã và đang trải qua là sẽ hiểu thấu. Sẹo
                khiến làn da không phẳng mịn, đặc biệt là sẹo rỗ làm giảm tự
                tin, mất thẩm mỹ cho khuôn mặt. Những vết sẹo khi để quá lâu sẽ
                rất điều trị dứt điểm, chính vì thế Seoul Spa sẽ mách bạn cách
                trị sẹo rỗ hiệu quả nhất để lấy lại làn da láng mịn như ban đầu
                nhé.
                {/* đỗ dữ liệu */}
              </p>
              {/* mục lục*/}
              <div className="content-left-menu"></div>
              {/* mục lục*/}
              {/* /////////// */}
              <div className="content-left-title">Sẹo rỗ là gì</div>
              <p className="p1">
                Sẹo rỗ là tàn tích để lại sau những vết thương của làn da. Điều
                này khiến cho các tế bào liên kết dưới da bị đứt gãy nghiêm
                trọng, khiến cho cấu trúc da có sự thay đổi lớn. Dù cơ thể đã
                thúc đẩy cơ chế tự làm lành vết thương nhưng tại những vị trí mô
                liên kết bị thoái hóa không thể khôi phục như cấu trúc da ban
                đầu. Quá trình này khiến cho các vùng da tại vị trí vết thương
                tạo ra những vết sẹo lõm gồ ghề trên làn da.
                {/* đỗ dữ liệu */}
              </p>
              <p className="p2">
                Sẹo rỗ thường xuất phát từ những yếu tố như mụn trứng cá, tai
                nạn, phẫu thuật, dị ứng mỹ phẩm, bệnh thủy đậu, …
                {/* đỗ dữ liệu */}
              </p>
              <div className="swperimg">
                <img src={img} alt="" className="img-ro1" />
                <p className="p3">
                  Sẹo rỗ làm ảnh hưởng trầm trọng đến thẩm mỹ gương mặt
                  {/* đỗ dữ liệu */}
                </p>
              </div>
              {/* //////////////// */}
              <div className="content-left-title">
                Nguyên nhân hình thành sẹo rỗ?
              </div>
              <p className="p1">
                Sẹo có nhiều loại như: sẹo lồi, sẹo co rút, sẹo phì đại và sẹo
                rỗ (lõm). Tuy nhiên, phổ biến và hay gặp nhất vẫn là sẹo rỗ hay
                còn gọi là sẹo lõm.
                {/* đỗ dữ liệu */}
              </p>
              <p className="p1">
                Cơ chế hình thành sẹo rỗ là do tổ chức nguyên bào sợi sâu trong
                nang lông ở lớp trung bì bị tổn thương dẫn đến đứt gãy, không tự
                sản xuất các protein, gây thiếu hụt collagen và elastin dưới da.
                Bởi lẽ đó, cơ thể bị mất khả năng tự lấp đầy vết thương tự
                nhiên. Điều này thường xảy ra sau mụn lành đi, bề mặt da không
                liền lại như trạng thái ban đầu, dẫn đến làn da xuất hiện dày
                đặc những lỗ nhỏ li ti được gọi là sẹo rỗ.
                {/* đỗ dữ liệu */}
              </p>
              <p className="p1">
                Sẹo rỗ hình thành nguyên nhân nhiều nhất là do mụn: Khi mụn các
                vết mụn điều trị, nặn mụn không đúng cách khiến nốt mụn bị tổn
                thương, viêm nhiễm khiến cho các liên kết dưới da bị đứt gãy
                trầm trọng sẽ dễ dẫn đến tình trạng để lại các vết sẹo rỗ sâu.
                Ngoài ra, mụn nếu không điều trị để quá lâu sẽ dẫn đến tình
                trạng sẹo rỗ nặng.
                {/* đỗ dữ liệu */}
              </p>
              <div className="swperimg">
                <img src={img1} alt="" className="img-ro1" />
                <p className="p3">Quá trình hình thành sẹo rỗ</p>
              </div>
              {/* //////////////// */}
              <div className="content-left-title">
                Dấu hiệu nhận biết các loại sẹo rỗ hiện nay
              </div>
              <p className="p1">
                Dựa vào đặc điểm nhận dạng, khoa học phân loại sẹo rỗ thành 3
                loại đó là sẹo chân đá nhọn, sẹo chân vuông và sẹo lượn sóng.
                Nhưng dấu hiệu nhận biết của chúng như thế nào hãy đọc nội tiếp
                theo:
                {/* đỗ dữ liệu */}
              </p>
              {/* //////////////// */}
              <div className="content-left-titles">Sẹo rỗ đá nhọn</div>
              <p className="p1">
                Sẹo rỗ đá nhọn hay còn được gọi là Ice pick Scar. Bạn có thể
                nhận dạng loại sẹo này qua những đặc điểm như:
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Sẹo có dạng hình những vật nhọn khoáy sâu vào da như có vật nhọn
                đâm vào.
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Đường kính sẹo từ 2mm và độ sâu khoảng 0.5mm
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Loại sẹo này hình thành thường do mụn gây ra
                {/* đỗ dữ liệu */}
              </p>
              {/* /////////// */}
              <div className="content-left-titles">Sẹo rỗ chân vuông</div>
              <p className="p1">
                Loại sẹo này còn có tên gọi khác là Boxcar Scar, bạn có thể dễ
                dàng nhận dạng loại sẹo này thông qua cái tên của nó. Cụ thể:
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Sẹo rỗ chân vuông có dạng chân hộp
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Đầu tròn hoặc hình bầu dục
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Dọc hai bên có độ dốc hơn so với sẹo đá nhọn
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Miệng sẹo rộng
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Loại sẹo này hình thành do mụn trứng cá bị phá vỡ do nặn mụn
                không đúng cách dẫn đến bị sưng viêm và hoại tử dần cấu trúc bên
                trong.
                {/* đỗ dữ liệu */}
              </p>
              {/* //////////////////// */}
              <div className="content-left-titles">Sẹo lượn sóng</div>
              <p className="p1">
                Sẹo lượn sóng có tên gọi tiếng anh là Rolling Scar. Cũng giống
                như các loại sẹo khác bạn có thể nhận chúng qua tên gọi. Cụ thể
                như sau:
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Sẹo Rolling có hình nhấp nhô, bấp bênh trên bề mặt đa như hình
                lượn sóng.
                {/* đỗ dữ liệu */}
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Sẹo có kích thước khá rộng từ 4-5mm
                {/* đỗ dữ liệu */}
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Loại sẹo này hình thành là do dải xơ bên trong cơ kéo các mô
                liên kết ở tầng biểu bì gây ép sâu vào da nên hình thành độ lượn
                sóng của sẹo.
                {/* đỗ dữ liệu */}
              </p>
              <div className="swperimg">
                <img src={img2} alt="" className="img-ro1" />
                <p className="p3">
                  Nhận dạng các loại sẹo rỗ thường gặp
                  {/* đỗ dữ liệu */}
                </p>
              </div>
              {/* /////////////////////// */}
              <div className="content-left-title">
                Tự điều trị sẹo lõm tại nhà có hiệu quả không?
              </div>
              <p className="p1">
                Để điều trị sẹo rỗ tại nhà, nhiều người tìm đến với những phương
                pháp như điều trị sẹo bằng phương pháp thiên nhiên, mẹo vặt dân
                gian, sử dụng kem trị sẹo, dùng rượu thuốc,… nhưng không phải
                phương pháp nào cũng điều trị dứt điểm vết sẹo mà phải tùy vào
                tình trạng sẹo.
                {/* đỗ dữ liệu */}
              </p>
              <p className="p1">
                Chẳng hạn đối với điều trị sẹo bằng nguyên liệu thiên nhiên tuy
                an toàn nhưng khả năng hiệu quả rất thấp, hầu hết những cách này
                chỉ giúp da sáng đều màu hơn. Và chỉ áp dụng với những vết sẹo
                mới hình thành thì mức độ hiệu quả nhiều hơn so với những vết
                sẹo lâu năm. Nó đòi hỏi chúng ta phải thật kiên trì lâu dài để
                điều trị, điều này cho thấy phương pháp này tốn khá nhiều thời
                gian.
                {/* đỗ dữ liệu */}
              </p>
              <p className="p1">
                Bên cạnh đó đối các phương pháp trị sẹo rỗ bằng kem trị sẹo nếu
                không có sự chỉ dẫn của bác sĩ da liễu dùng vô tội vạ, hoặc mua
                phải những loại kem độc hại cho da thì sẽ khiến làn da ngày càng
                bị tàn phá trầm trọng hơn. Và hiệu quả đối với kem trị mụn cũng
                như mặt nạ thiên nhiên là phải tốn khá nhiều thời gian để kiên
                trì bôi mỗi ngày và không điều trị được đối với những loại sẹo
                rỗ lâu năm và sẹo sâu. Và khả năng điều trị phục hồi đối với
                cách này là không cao.
                {/* đỗ dữ liệu */}
              </p>
              <div className="swperimg">
                <img src={img3} alt="" className="img-ro1" />
                <p className="p3">
                  Trị sẹo tại nhà chỉ cải thiện những vết sẹo mới hình thành
                  {/* đỗ dữ liệu */}
                </p>
              </div>
              <p className="p1">
                Ngoài ra, hiện nay có vô vàn những sản phẩm trị sẹo tiềm ẩn
                nhiều nguy hiểm cho da, bán tràn lan trên thị trường như rượu
                thuốc Bắc. Phương pháp này được các chuyên gia, bác sĩ da liễu
                chứng minh nó không an toàn với làn da, thậm chí gây bào mòn,
                tổn thương da nghiêm trọng.
                {/* đỗ dữ liệu */}
              </p>
              <p className="p1">
                Với những thông tin trên thì chúng ta có thể khẳng định điều trị
                sẹo tại nhà không tốt và không mang lại hiệu quả cao như chúng
                ta vẫn nghĩ.
                {/* đỗ dữ liệu */}
              </p>
              {/* ///////////////////// */}
              <div className="content-left-title">
                TOP 12+ cách điều trị sẹo rỗ – sẹo thâm mụn hiệu quả nhất
                {/* đỗ dữ liệu */}
              </div>
              <p className="p1">
                Hiện nay có rất nhiều phương pháp trị sẹo rỗ, dù vậy nhưng không
                phải phương pháp trị sẹo nào cũng hiệu quả và an toàn. Điều này
                khiến cho nhiều người khó khăn trong việc lựa chọn phương pháp
                điều trị hiệu quả nhất. Chính vì thế bài viết này Seoul Spa sẽ
                gợi ý cho bạn những phương pháp điều trị được xem là an toàn,
                lành tính cho da cụ thể
                {/* đỗ dữ liệu */}
              </p>
              <div className="content-left-titles">
                Sử dụng kem trị sẹo của các thương hiệu uy tín
                {/* đỗ dữ liệu */}
              </div>
              <p className="p1">
                Cách sử dụng kem trị sẹo là một trong những cách cải thiện sẹo
                tiện dụng nhất được nhiều người tin dùng. Bởi ngày nay chúng ta
                có rất nhiều sản phẩm chuyên đặc trị sẹo bán phổ biến trên thị
                trường. Nhưng đây cũng là điểm khiến nhiều người khó khăn trong
                việc lựa chọn sản phẩm nào phù hợp và hiệu quả với tình trạng
                sẹo của mình. Vì thế để dễ dàng hơn trong việc lựa chọn kem trị
                sẹo hãy tham gợi ý dưới đây:
                {/* đỗ dữ liệu */}
              </p>
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Kem trị sẹo lõm Scar Esthetique
              </p>
              <p className="p1">
                Đây là sản phẩm trị sẹo đến từ nước Mỹ, từ khi tung ra thị
                trường nó đã nhận được nhiều sự quan tâm và sử dụng của nhiều
                người. Kem trị sẹo Scar Esthetique được biết đến với công dụng
                phục hồi những tổn thương trên bề mặt da. Bởi trong kem có chứa
                những thành phần được chiết từ thiên nhiên như:
              </p>
              <p className="p1">
                Glucosamine có khả năng kích thích tăng sinh collagen mạnh mẽ,
                khôi phục các mô liên kết bị đứt gãy và thiết lập cấu trúc da
                như ban đầu, từ đó những vết sẹo nhanh chóng được lấp đầy. Bên
                cạnh đó, Onion Extract là thành phần có trong kem được chiết
                xuất từ hành tây có tác dụng giảm viêm và trẻ hóa da cực kì hiệu
                quả. Ngoài ra, trong kem còn chứa các thành phần khác như
                Laminaria Japonica, Arnica Extract, Vitamin A có tác dụng cấp
                ẩm, làm mềm da và tái tạo tế bào da mới mịn màng hơn.
              </p>
              <div className="swperimg">
                <img src={img4} alt="" className="img-ro1" />
                <p className="p3">Kem trị sẹo lõm Scar Esthetique</p>
              </div>
              <p className="p1">
                Loại kem này trị sẹo mụn hiệu quả ở cả sẹo thâm và sẹo rỗ
              </p>
              {/* ////////////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Kem trị sẹo rỗ White Doctors
              </p>
              <p className="p1">
                Đây có lẽ là loại kem quen thuộc với nhiều người Việt Nam vì nó
                được sản xuất trong nước. Với những công dụng trị sẹo vượt trội
                như phục hồi những vùng da bị tổn thương do sẹo, lấp đầy sẹo rỗ
                và tái tạo da mới mịn màng hơn. Bên cạnh đó là khả năng chống
                lão hóa. Bởi trong kem có chứa các thành phần như dịch chiết
                nhân sâm, Niacinamide, Zinc Laurate,… Đây đều là những thành
                phần chiết xuất từ thiên nhiên an toàn và lành tính cho da giúp
                hỗ trợ điều trị sẹo rất tốt.
              </p>
              <p className="p1">
                Dòng kem này cũng có thể điều trị các loại sẹo rỗ và cả sẹo
                thâm. Nhưng giá thành của loại kem này thì hơi cao nhưng đổi lại
                sản phẩm được review rất tích cực từ nhiều khách hàng.
              </p>
              <div className="swperimg">
                <img src={img5} alt="" className="img-ro1" />
                <p className="p3">Kem trị sẹo rỗ White Doctors</p>
              </div>
              {/* ////////////////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Kem trị sẹo Scaryl Cicatrici Gel
              </p>
              <p className="p1">
                Đây là dòng kem thứ 3 mà chúng tôi muốn giới thiệu đến bạn, bởi
                đây là sản phẩm chiết xuất hoàn toàn từ nguyên liệu thiên nhiên
                vô cùng an toàn và lành tính cho da. Hơn hết là khả năng trị sẹo
                của loại kem này cũng không kém cạnh bất cứ sản phẩm trị sẹo
                nào.
              </p>
              <p className="p1">
                Trong thành phần của kem có chứa thành phần chính là Scaryl
                Cicatrici được chiết xuất từ dầu hạnh nhân, dẫn xuất Vitamin C,
                sáp ong , tiền chất Vitamin E… Đây đều là những thành phần có
                tác dụng thúc đẩy tăng sinh collagen phục hồi các liên kết đứt
                gãy, tái tạo làn da mới sáng khỏe và lấp đầy những vùng da bị
                sẹo. Bên cạnh đó, kem trị sẹo Scaryl Cicatrici gel còn có tác
                dụng giảm thâm sẹo, cấp ẩm và giúp da căng mịn hồng hào.
              </p>
              <p className="p1">
                Loại kem này điều trị hầu hết các loại sẹo rỗ, sẹo thâm. Tuy
                nhiên có một nhược điểm là nó không sử dụng được cho da mỏng
                yếu, dễ nhạy cảm và kích ứng.
              </p>
              <div className="swperimg">
                <img src={img6} alt="" className="img-ro1" />
                <p className="p3">Kem trị sẹo Scaryl Cicatrici Gel</p>
              </div>
              {/* //////////////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Kem trị sẹo Hiruscar Post Acne
              </p>
              <p className="p1">
                Loại kem này xuất xứ từ một thương hiệu nổi tiếng của Châu Âu có
                thâm niên lâu năm trong việc điều trị sẹo. Hiruscar Post Acne có
                chứa những thành phần được chiết xuất từ hành tây đỏ,
                Glycosaminoglycans, Sorbeth-30, vitamin B3, Allantoin,…
              </p>
              <p className="p1">
                Những thành phần này đều có công dụng kích thích tăng sinh
                collagen , lấp đầy những vùng da bị sẹo rỗ. Hơn hết, kem
                Hiruscar Post Acne còn có khả năng đẩy lùi các hắc sắc tố
                melanin giúp da đều màu, giảm thâm và ngăn ngừa sự hình thành
                của các vi khuẩn gây mụn nhờ tính kháng khuẩn.
              </p>
              <div className="swperimg">
                <img src={img7} alt="" className="img-ro1" />
                <p className="p3">Kem trị sẹo Hiruscar Post Acne</p>
              </div>
              {/* //////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Kem trị sẹo rỗ Scar Care
              </p>
              <p className="p1">
                Đây là sản phẩm được ứng dụng công nghệ trị sẹo Nano giúp cho
                các tính chất trị sẹo có thể thẩm thấu sâu vào bên trong da,
                thúc đẩy các thành phần trong kem phát huy tối ưu công dụng của
                nó.
              </p>
              <p className="p1">
                Trong kem trị sẹo rỗ Scar Care có công dụng lấp đầy sẹo rỗ, loại
                bỏ sẹo thâm và cải thiện màu sắc của da giúp da trắng sáng và
                đều màu hơn. Bên cạnh đó, loại kem này còn giúp da tăng sinh
                collagen duy trì cấu trúc da săn chắc, đàn hồi và làm chậm quá
                trình lão hóa da. Bởi sản phẩm này có chứa các thành như chất
                chống oxy hóa, Vitamin A, tinh chất Polypeptide, tinh dầu hoa
                cúc,..
              </p>
              <p className="p1">
                Những thành phần đều an toàn và lành tính cho da. Nhưng nhược
                điểm của sản phẩm này là có mức giá khá cao không phù hợp với
                đối tượng sinh viên học sinh . Ngoài ra còn một điểm quan trọng
                là loại kem này chỉ có hiệu quả với các loại sẹo mới hình thành
                dưới 1 năm.
              </p>
              <div className="swperimg">
                <img src={img8} alt="" className="img-ro1" />
                <p className="p3">Kem trị sẹo rỗ Scar Care</p>
              </div>
              {/* //////////////// */}
              <div className="content-left-titles">
                Điều trị sẹo rỗ bằng nguyên liệu tự nhiên
              </div>
              <p className="p1">
                Ngoài phương pháp trị sẹo bằng kem thì sử dụng nguyên liệu thiên
                nhiên đánh bay sẹo cũng là một lựa chọn an toàn của nhiều người.
                Sau đây là 5 gợi ý nguyên liệu trị sẹo rất tốt mà có thể bạn
                chưa biết:
              </p>
              {/* //////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Trị sẹo rỗ bằng mật ong
              </p>
              <p className="p1">
                Chúng ta thường biết đến mật ong có những lợi ích tuyệt vời đối
                với sức khỏe nhưng ít ai biết rằng mật ong còn là một nguyên
                liệu “vàng” trị mụn và sẹo rỗ sau mụn cực kì tốt. Bởi trong mật
                ong có chứa các thành phần chống oxy hóa có tác dụng kháng
                khuẩn, ngừa viêm và ngăn ngừa thâm sẹo sau mụn.
              </p>
              <p className="p1">
                Bên cạnh đó mật ong còn có tác dụng kích thích sự hình thành
                collagen giúp da phục hồi các liên kết mô bị đứt gãy, hoàn thiện
                cấu trúc da và làm chậm quá trình lão hóa da. Nhờ đó mà mật ong
                có khả năng trị sẹo khá tốt.
              </p>
              <div className="swperimg">
                <img src={img9} alt="" className="img-ro1" />
                <p className="p3">
                  Mật ong là nguyên liệu trị sẹo tại nhà khá tốt
                </p>
              </div>
              <p className="p1">Cách thực hiện</p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Chuẩn bị 2 muỗng mật ong nguyên chất
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Rửa mặt thật sạch, thấm khô nước trên da và thoa mật ong lên
                vùng da mặt bị sẹo
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Đắp khoảng 15-20 phút thì rửa lại với nước sạch
              </p>
              <p className="p1">
                Ngoài công thức này thì bạn còn có thể kết hợp mật ong với nước
                cốt chanh theo tỉ lệ 1:2 và thực hiện tương tự như các bước nếu
                trên. Khi sử dụng công thức này bạn nên áp dụng 2-3 lần/ tuần để
                thấy được hiệu quả cải thiện tình trạng sẹo của làn da.
              </p>
              {/* //////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Trị sẹo rỗ với nước rau má
              </p>
              <p className="p1">
                Trong thành phần của rau má có chứa chất Triterpenoids, nó có
                khả năng thúc đẩy tăng sinh collagen giúp da phục hồi những vùng
                da tổn thương và tái tạo làn da mới lấp đầy những vùng da bị
                sẹo. Bên cạnh đó, rau má còn chứa chất có tác dụng chống oxy hóa
                có tác dụng kháng khuẩn, thanh lọc cơ thể và làm lưu thông mạch
                máu. Nhờ đó làn da bên trong lẫn bên ngoài nhanh chóng phục hồi
                khỏe lại, da sáng mịn, mờ sẹo và tươi tắn sau một thời gian sử
                dụng rau má trị sẹo.
              </p>
              <div className="swperimg">
                <img src={img10} alt="" className="img-ro1" />
                <p className="p3">
                  Một số thánh phần của rau má có tác dụng trị sẹo rất tốt
                </p>
              </div>
              <p className="p4">Cách thực hiện</p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Chuẩn 200g rau má tươi và 1 muỗng nước cốt chanh
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Loại bỏ rau úa vàng, hư và rửa sạch lại với nước.
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Cắt nhỏ rau má và bỏ vào máy xay sinh tố xay nhuyễn
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Lọc lấy nước cốt rau má và hòa quyện với nước cốt chanh
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Rửa mặt thật sạch với sữa rửa mặt và thoa hỗn hợp đã chuẩn bị
                lên mặt.
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Thư giãn khoảng 15-20 phút để dưỡng chất trong rau má và chanh
                thấm vào da, sau đó rửa lại với nước sạch.
              </p>
              <p className="p1">
                Sự kết hợp giữa rau má và chanh sẽ phát huy khả năng trị sẹo và
                phục hồi những vùng da bị tổn thương nhanh hơn.
              </p>
              {/* //////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Cách trị sẹo rỗ bằng nha đam
              </p>
              <p className="p1">
                Nha đam cũng là một nguyên liệu trị sẹo không hề kém cạnh những
                nguyên liệu khác. Bởi trong nha đam có chứa những thành phần có
                tính kháng khuẩn, ngừa viêm, chống oxy hóa tự nhiên. Nhờ vậy mà
                khi sử dụng nha đam trị sẹo trong một thời gian, nó sẽ thúc đẩy
                sự hình thành và phát triển của collagen, phục hồi những liên
                kết mô da bị đứt gãy. Từ đó những vết sẹo sẽ dần dần được tái
                tạo và lấp đầy bề mặt da.
              </p>
              <div className="swperimg">
                <img src={img11} alt="" className="img-ro1" />
                <p className="p3">
                  Nha đam không chỉ làm có tác dụng dưỡng da, trị mụn mà nó còn
                  trị sẹo hiệu quả
                </p>
              </div>
              <p className="p4">Cách thực hiện</p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Chuẩn bị 1 cành nha đam, gọt vỏ và rửa sạch
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Lấy phần thịt nha đam đã rửa sạch xay nhuyễn
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Rửa mặt thật sạch va thoa đều gel nha đam đã xay lên da
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Đắp mặt nạ nha đam trị sẹo trong khoảng 15-20 phút thì rửa lại
                thật sạch với nước.
              </p>
              <p className="p1">
                Áp dụng công thức này 2-3 lần trong tuần để thấy được hiệu quả
                cải thiện sẹo trên da.
              </p>
              {/* //////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Cách trị sẹo bằng dầu dừa
              </p>
              <p className="p1">
                Dầu dừa sở hữu nhiều thành phần vô cùng tốt cho sức khỏe, tóc và
                làn da. Và một trong số những công dụng tuyệt vời của nó là khả
                năng làm lành vết thương, và trị sẹo rất tốt. Bởi trong dầu dừa
                có chứa một hàm lượng các chất có tác dụng kháng khuẩn, ngừa
                viêm và ngăn ngừa sẹo thâm hình thành. Bên cạnh đó, dầu dừa còn
                chứa các chất chống oxy hóa giúp các vết thương do sẹo sớm được
                phục hồi và lấp đầy sẹo nhanh hơn.
              </p>
              <div className="swperimg">
                <img src={img12} alt="" className="img-ro1" />
                <p className="p3">
                  Dầu dừa cũng là nguyên liệu trị sẹo khá tốt
                </p>
              </div>
              <p className="p4">Cách thực hiện</p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Chuẩn bị 1 muỗng dầu dừa nguyên chất
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Rửa mặt thật kỹ và thoa đều dầu dừa lên da
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Massage thật nhẹ nhàng vùng da bị sẹo khoảng 2 phút theo chiều
                xoắn ốc và chiều từ dưới lên trên, trong ra ngoài để dưỡng chất
                trong dầu dừa thẩm thấu sâu vào bên trong da.
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Thư giãn khoảng 15-20 phút thì rửa lại thật sạch với nước ấm
              </p>
              <p className="p1">
                Với công thức trị sẹo bằng dầu dừa bạn có thể kết hợp với các
                nguyên liệu khác như trà xanh hoặc bơ để làm tăng khả năng cải
                thiện tình trạng sẹo trên da và giúp dưỡng da căng mịn hiệu quả
                hơn.
              </p>
              {/* //////////////// */}
              <p className="p4">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Trị sẹo rỗ bằng bột trà xanh
              </p>
              <p className="p1">
                Nhờ sở hữu một hàm lượng dồi dào EGCG mà trà xanh có tác dụng
                kháng khuẩn, ngừa viêm và làm lành những tổn thương sau mụn cực
                kì tốt. Bên cạnh đó, một số thành phần khác của trà xanh còn có
                tính oxi hóa cao, nhờ vậy mà nó khả năng gia tăng sự phát triển
                của các liên kết mô dưới da giúp phục hồi và làm đầy sẹo rỗ. Bên
                cạnh đó, sử dụng trà xanh còn giúp làn da ngăn ngừa mụn, da
                khỏe, sáng và đều màu hơn.
              </p>
              <div className="swperimg">
                <img src={img13} alt="" className="img-ro1" />
                <p className="p3">
                  Những thành phần của trà xanh giúp tăng sinh collagen lấp đầy
                  sẹo hiệu quả
                </p>
              </div>
              <p className="p4">Cách thực hiện</p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Chuẩn bị 2 muỗng trà xanh và 1 muỗng mật ong nguyên chất
              </p>
              <p>
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Hòa quyện 2 nguyên liệu lại với nhau và khuấy thật đều, có thể
                thêm một ít nước lọc để hỗn hợp sền sệt.
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Vệ sinh da thật sạch và thoa hỗn hợp đã chuẩn bị lên da.
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Massage thật nhẹ nhàng theo chiều xoắn ốc tại vùng da bị sẹo
                khoảng 2 phút.
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Đắp mặt nạ trị sẹo rỗ khoảng 15-20 phút thì rửa lại thật sạch
                với nước.
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Thoa toner để da cân bằng lại độ PH và độ ẩm vì sử dụng trà xanh
                có thể khiến da bị khô, thiếu ẩm.
              </p>
              {/* /////////////////// */}
              <div className="content-left-titles">
                Điều trị sẹo rỗ tại các spa/thẩm mỹ viện
              </div>
              <p className="p1">
                Hầu hết các phương pháp trị sẹo bằng nguyên liệu thiên nhiên
                cũng giống như cách trị sẹo bằng kem phải mất 1 khoảng thời gian
                duy trì điều trị khá lâu thì mới có thấy có dấu cải thiện. Bên
                cạnh đó, một sự thật là những cách trên chỉ điều trị sẹo hiệu
                quả đối với những loại sẹo mới hình thành, chưa có sự liên kết
                sẹo chặt chẽ dưới da. Chính vì thế ngày nay, để tối ưu thời
                gian, chi phí mà hiệu quả trị sẹo lại cao thì nhiều người đã lựa
                chọn điều trị sẹo rỗ bằng công nghệ.
              </p>
              <p className="p1">
                Nhờ công nghệ hiện đại mà ngày nay chúng ta có rất nhiều phương
                pháp trị sẹo được nhiều người lựa chọn như:
              </p>
              {/* //////////// */}
              <p className="p4">Phương pháp bóc tách đáy sẹo</p>
              <p className="p1">
                Bóc tách đáy sẹo là hay còn gọi là bóc tách vi điểm. Phương pháp
                này sử dụng loại kim chuyên dụng y khoa có kích thước phù hợp
                với độ sâu của sẹo để luồn lách qua bề mặt da và phá vỡ sự liên
                kết chặt chẽ của đáy sẹo. Từ đó các tế bào da sẽ thúc đẩy quá
                trình tái tạo da mới và làm đầy vùng da bị sẹo.
              </p>
              <p className="p1">
                Đây là phương pháp truyền thống đã được sử dụng từ khi công nghệ
                thẩm mỹ phát triển nhưng nó vẫn được áp dụng rộng rãi và phổ
                biến bởi nó cải thiện tình trạng sẹo khá hiệu quả…
              </p>
              <div className="swperimg">
                <img src={img14} alt="" className="img-ro1" />
                <p className="p3">
                  Bóc tách sẹo là phương pháp loại bỏ sẹo triệt để
                </p>
              </div>
              <p className="p4">Lăn kim trị sẹo rỗ</p>
              <p className="p1">
                Lăn kim là phương pháp sử dụng dụng cụ lăn kim chuyên biệt tác
                động trực tiếp lên da mặt nhằm tạo ra những tổn thương giả trên
                da. Qúa trình này sẽ làm thúc đẩy sự hình thành của collagen,
                elastin mạnh mẽ giúp phục hồi các liên kết đứt gãy tại vùng da
                bị sẹo, sau đó vết sẹo sẽ dần được lấy đầy và lành sẹo.
              </p>
              <p className="p1">
                Ngoài ra nhờ các tổn thương giả trên da đã tạo nên đường dẫn
                giúp tinh chất, huyết thanh trị sẹo len lỏi vào sâu bên trong
                da, giúp cho quá trình lành sẹo diễn ra nhanh chóng hơn.
              </p>
              <p className="p1">
                Ngoài những công nghệ nêu trên thì còn một số công nghệ trị sẹo
                khác như trị sẹo bằng PRP, trị sẹo bằng laser,..
              </p>
              <p className="p1">
                Theo các bác sĩ da liễu cho rằng các vết sẹo rỗ, sẹo lõm nên
                được điều trị bằng công nghệ sẽ rút ngắn thời gian điều trị, nốt
                sẹo mau lành, lấp đầy bề mặt da, mà còn an toàn và hiệu quả hơn,
                so với việc điều trị sẹo tại nhà bằng nguyên liệu thiên nhiên
                hay kem.
              </p>
              <div className="swperimg">
                <img src={img15} alt="" className="img-ro1" />
                <p className="p3">
                  Lăn kim sẽ tăng sinh collagen mạnh mẽ giúp lấp đầy vùng da sẹo
                </p>
              </div>
              <div className="content-left-title">
                Tại sao nên chọn điều trị sẹo tại spa?
              </div>
              <p className="p1">
                Với sự phát triển của đất nước ngày nay, con người đã quen dần
                với việc lựa chọn các dịch vụ tại cơ sở spa uy tín để điều trị
                da và nâng cấp làn da của mình. Cụ thể đối với việc đến Spa trị
                sẹo khách hàng sẽ tận hưởng rất nhiều lợi ích như:
              </p>
              <div className="content-left-titles">
                Điều trị an toàn, hiệu quả cao
              </div>
              <p className="p1">
                Khi đến Spa trị sẹo bạn được đội ngũ bác sĩ soi da, tư vấn phác
                đồ điều trị. Sau đó là được các kỹ thuật viên tay nghề cao áp
                dụng các phương pháp điều trị sẹo hiện đại, cùng với sự hỗ trợ
                của đầy đủ trang thiết bị hiện đại giúp cho việc trị sẹo đạt
                hiệu quả cao nhất. Bên cạnh đó quy trình trị sẹo còn diễn ra
                theo tiêu chuẩn an toàn, chuẩn Y Khoa chính vì vậy mà mọi bước
                thực hiện luôn được đảm bảo an toàn.
              </p>
              <div className="content-left-titles">
                Loại bỏ tận gốc đáy sẹo, duy trì hiệu quả lâu dài
              </div>
              <p className="p1">
                Khi đến spa trị sẹo, cơ sở làm đẹp sẽ ứng dụng các phương pháp
                điều trị sẹo hiện đại giúp bạn loại bỏ hoàn toàn đáy sẹo, lấp
                đầy sẹo rỗ, và phục hồi những vùng da bị tổn thương. Hơn hết còn
                giúp da khỏe và mịn màng. Sau liệu trình trị sẹo, các chuyên
                viên sẽ tư vấn chăm sóc da tại nhà đúng cách và định kì thăm hỏi
                quá trình lành sẹo. Điều này sẽ giúp quá trình trị sẹo tại Spa
                đạt hiệu quả cam kết cao.
              </p>
              <div className="content-left-titles">
                Điều trị dưới sự hỗ trợ của máy móc, trang thiết bị hiện đại
              </div>
              <p className="p1">
                Ở các cơ sở làm đẹp uy tín sẽ có đầy đủ những trang thiết bị
                hiện đại, cùng đội ngũ chuyên viên tay nghề cao để thực hiện
                liệu trình trị sẹo cho khách hàng. Điều này sẽ giúp cho quá
                trình trị sẹo luôn đảm bảo an toàn, chính xác, hiệu quả cao nhất
                mà không có bất kỳ rủi ro nào xảy ra với làn da.
              </p>
              <div className="swperimg">
                <img src={img16} alt="" className="img-ro1" />
                <p className="p3">
                  Trang thiết bị, công nghệ hiện đại tại Spa, thẩm mỹ viện giúp
                  loại bỏ triệt để sẹo
                </p>
              </div>
              <div className="content-left-titles">
                Không tốn quá nhiều chi phí như lời đồn
              </div>
              <p className="p1">
                Ngày nay, các cơ sở Spa mọc lên khá nhiều, dẫn đến tình trạng
                cạnh tranh về giá, điều này có lợi cho khách hàng. Vì mức độ
                cạnh tranh quá cao việc cung cấp dịch vụ giá cao sẽ khó tồn tại
                trên thị trường. Chính vì vậy mức phí dịch vụ sẽ giảm nhiều so
                với những năm kinh tế, công nghệ chưa phát triển.
              </p>
              <p className="p1">
                Do đó, giờ đây bạn không phải lo lắng quá nhiều về chi phí dịch
                vụ trị sẹo vì có rất nhiều cơ sở làm đẹp cung cấp dịch vụ này
                với mức giá phải chăng, phù hợp với nhiều đối tượng và mỗi tháng
                đều có những ưu đãi hấp dẫn. Điều quan trọng là chất lượng luôn
                là yếu tố ghi điểm để khách hàng quay lại sử dụng dịch vụ.
              </p>
              <div className="content-left-title">
                Điều trị sẹo rỗ, sẹo lõm, sẹo thâm mụn tận gốc tại SeoulSpa
              </div>
              <div className="content-left-titles">
                Liệu trình trị sẹo công nghệ hiện đại nhất
              </div>
              <p className="p1">
                Có thể bạn đã thử mọi cách để trị sẹo rỗ, từ các phương pháp sử
                dụng nguyên liệu tự nhiên đến spa, thẩm mỹ. Nhưng với góc độ từ
                chuyên gia da liễu lâu năm như SeoulSpa thì để xóa sổ sẹo rỗ
                thành công, bạn có thể tham khảo ngay 2 phương pháp được tin
                chọn hàng đầu sau:
              </p>
              <p className="p2">
                <GoPrimitiveDot
                  style={{
                    marginRight: "5px",
                    marginBottom: "-3.5px",
                  }}
                />
                Phi kim PRP 4.0 trị sẹo rỗ
              </p>
              <p className="p1">
                Cơ chế của kỹ thuật phi kim chính là: sử dụng các đầu kim siêu
                nhỏ nano để tác động và tạo vết thương giả trên da. Mục đích của
                phi kim là đưa các dưỡng chất từ huyết thanh tự thân giàu tiểu
                cầu giúp tăng sinh collagen vào vị trí đã xâm lấn, làm đầy và hỗ
                trợ làm mịn vùng da bị sẹo.
              </p>{" "}
              <p className="p1">
                Tại SeoulSpa.Vn, phi kim PRP 4.0 là một trong những dịch vụ
                “đinh” giúp nhiều khách hàng tìm lại được sự mịn màng trên làn
                da nhờ rất nhiều ưu điểm…
              </p>
              <div className="comment">
                <Comments
                  className="comments"
                  commentsUrl="http://localhost:3004/comments"
                  currentUserId="1"
                />
              </div>
            </div>

            {/* ////////////// */}
            <div className="Scars-content-right">
              <div className="content-right-title">Dịch vụ liên quan</div>
              {/* //////////////// */}
              <Link to="/" className="right-wrapper">
                <div className="img">
                  <img src={img18} alt="" className="right-img" />
                </div>
                <div className="right-content">
                  <div className="right-title">DR. TRỊ SẸO RỖ SEL 5.0</div>
                  <p className="right-text">
                    {" "}
                    Sẹo rỗ là tàn tích sau quá trình là...
                  </p>
                </div>
              </Link>
              {/* /////////////////////// */}
              <Link to="/" className="right-wrapper">
                <div className="img">
                  <img src={img19} alt="" className="right-img" />
                </div>
                <div className="right-content">
                  <div className="right-title">TRỊ SẸO RỖ</div>
                  <p className="right-text">
                    {" "}
                    Cơn mưa mụn qua đi để lại những vết..
                  </p>
                </div>
              </Link>
              {/* ///////////////////// */}
              <Link to="/" className="right-wrapper">
                <div className="img">
                  <img src={img20} alt="" className="right-img" />
                </div>
                <div className="right-content">
                  <div className="right-title">ĐIỀU TRỊ SẸO RỖ PRP 3.0</div>
                  <p className="right-text">
                    {" "}
                    Sẹo rỗ là những vết hõm trên da..
                  </p>
                </div>
              </Link>
              {/* //////////////////////// */}
              <Link to="/" className="right-wrapper">
                <div className="img">
                  <img src={img21} alt="" className="right-img" />
                </div>
                <div className="right-content">
                  <div className="right-title">ĐIỀU TRỊ SẸO RỖ PRP 4.0</div>
                  <p className="right-text">
                    {" "}
                    Bạn buồn phiền vì khuôn mặt nhiều...
                  </p>
                </div>
              </Link>
              <div className="right-banner">
                <img src={img22} alt="" className="banner" />
              </div>
            </div>
            {/* //////////// */}
          </div>
          {/* Nội dung bài viết kt*/}
        </div>
        <LogSeou/>
        <Calendar/>
        <Branch/>
        <Footer/>
      </div>
        <Scroll />
    </>
  );
};

export default Scars;
