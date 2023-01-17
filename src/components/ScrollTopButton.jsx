import { React, useState } from "react";const scrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className=" align-items-center">
      <i
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
        }}
        class=" fa-2x fa-solid fa-circle-chevron-up  border-white ">
        <span> </span>
        <span className="h3">top</span>
      </i>
    </div>
  );
};

export default scrollTopButton;
