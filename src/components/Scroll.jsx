import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {showTopBtn && (
                <button style={{ position: "fixed",
                  bottom: "30px",
                  right: "50px",
                  width: "50px",
                  height: "50px",
                  background: "#b1812c",
                  border:"0.5px solid white",
                  color: "white",
                  fontSize:"30px",
                  padding: "10px",
                  borderRadius: "50%",
                  cursor:"pointer",
                }}
                  onClick={goToTop}
                  >
                  ^
                </button>
            )}
        </div>
    );
};
export default ScrollToTop;