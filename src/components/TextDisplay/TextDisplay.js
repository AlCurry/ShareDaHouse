import React from "react";

const textContainer = {
  margin: "0",
  padding: "0",
  textAlign: "center"
};
const TextDisplay = props => {
  const { children, title, subtitle, tinyTitle } = props;

  return (
    <div>
      <div style={textContainer}>
        <h2>{title || null}</h2>
        <h3 className={null}>{subtitle || null}</h3>
        <h6>{tinyTitle || null}</h6>
        <h4 className={null}>{children || null}</h4>
      </div>
    </div>
  );
};

export default TextDisplay;
