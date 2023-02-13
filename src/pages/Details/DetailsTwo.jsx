import React from "react";
import styled from "styled-components";
import ArrowLeft from "../../comonents/UI/ArrowLeft";
import Cart from "../../comonents/UI/Cart";

function DetailsTwo() {
  return (
    <Cart>
      <Conteiner>
        <p>Products Details page</p>
        <p>Product Name 2</p>
      </Conteiner>
      <ArrowLeft />
    </Cart>
  );
}

export default DetailsTwo;

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 26px;
  }
`;
