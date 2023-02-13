import React from "react";
import styled from "styled-components";

function Button({ children, onClick }) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}

export default Button;

const ButtonStyle = styled.button`
  background-color: #00c4c4;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: #006b89;
  }

  :active {
    background-color: #00aac4;
  }
`;
