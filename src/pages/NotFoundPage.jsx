import React from "react";
import styled from "styled-components";

function NotFoundPage() {
  return (
    <Conteiner>
      <H1>Not Found Page !!!</H1>
    </Conteiner>
  );
}

export default NotFoundPage;

const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  margin-top: -200px;
  color: red;
  font-size: 6rem;
`;
