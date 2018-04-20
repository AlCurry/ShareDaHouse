import React from "react";

const Footer = props => {
  const { children } = props;
  return (
    <div className="footerContainer">
      <div>
        <h4>{children}</h4>
      </div>
    </div>
  );
};

export default Footer;
