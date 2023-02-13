import React from "react";
import Card from "../../comonents/UI/Cart";
import { SlArrowLeft } from "react-icons/sl";
import styled from "styled-components";

function MyOrders() {
  return (
    <>
      <Card>
        <CartText>My Orders Page bla bla bla bla bla bla</CartText>
      </Card>
      <ArrowLeft />
    </>
  );
}

export default MyOrders;

const CartText = styled.p`
  font-size: 32px;
  margin-top: 10px;
`;

const ArrowLeft = styled(SlArrowLeft)`
  position: fixed;
  top: 640px;
  left: 40px;
  font-weight: 600;
  font-size: 50px;
  color: #00aac4;
  cursor: pointer;

  :hover {
    color: #007385;
  }

  :active {
    color: #00aac4;
  }
`;
