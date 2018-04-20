import React from "react";
const inputContainer = {
  height: "100%",
  backgroundColor: "skyblue",
  display: "flex",
  alignContent: "center"
};
const inputStyle = {
  height: "32px",
  width: "100%",
  padding: "2px",
  margin: "4px",
  borderRadius: "10%"
};
const Input = props => (
  <div style={inputContainer}>
    <input style={inputStyle} {...props} />
  </div>
);
export default Input;
