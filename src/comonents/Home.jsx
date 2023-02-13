import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Conteiner>
      <h1>Hello</h1>
    </Conteiner>
  );
}

export default Home;

const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  color: #dedede;
  background-color: black;
`;

