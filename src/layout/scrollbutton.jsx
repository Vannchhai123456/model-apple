import "../App.css";
import { ArrowUpToLine } from "lucide-react";
import React, { useEffect, useState } from "react";

const Scrollbutton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ClickTotop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="btnTotop" style={{ display: showButton ? "block" : "none" }}>
      <button onClick={ClickTotop}>
        <ArrowUpToLine />
      </button>
    </div>
  );
};

export default Scrollbutton;