import React from "react";
import styled from "styled-components";

const ButtonCover = styled.button`
  text-transform: uppercase;
  display: flex;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  padding: 7.5px 30px;
  margin-left: 25px;
  background-color: ${(props) => (props.type ? "#3E7DFE" : "transparent")};
  color: ${(props) => (props.type ? "white" : "black")};
  border: solid 2px ${(props) => (props.type ? "#3E7DFE" : "black")};
`;

const Button = ({ text, blueType }) => (
  <ButtonCover type={blueType}>{text}</ButtonCover>
);
export default Button;
