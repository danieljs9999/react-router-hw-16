import React from "react";
import styled from "styled-components";

function Cart({ children }) {
  return (
    <Conteiner>
      <CardStyle>{children}</CardStyle>
    </Conteiner>
  );
}

export default Cart;

const Conteiner = styled.div`
  display: flex;
  justify-content: center;
`;

const CardStyle = styled.div`
  width: 80%;
  height: 60vh;
  margin-top: 120px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 6px;
  font-size: 1.5rem;
  margin-bottom: 100px;
`;
