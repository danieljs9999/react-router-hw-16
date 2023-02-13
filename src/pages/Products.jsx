import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../comonents/UI/Button";
import ArrowLeft from "../comonents/UI/ArrowLeft";

const productArr = [
  { title: "Product Name 1", id: "1" },
  { title: "Product Name 2", id: "2" },
  { title: "Product Name 3", id: "3" },
];

function Products() {
  const navigate = useNavigate();

  return (
    <>
      <Ul>
        {productArr.map((item) => {
          return (
            <Li key={item.id}>
              <p>{item.title}</p>
              <Button onClick={() => navigate(`/products/${item.id}/details`)}>
                Detalis
              </Button>
            </Li>
          );
        })}
        <ArrowLeft />
      </Ul>
    </>
  );
}

export default Products;

const Ul = styled.ul`
  margin-top: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 1200px;
  background-color: white;
  padding: 20px 20px;
  font-size: 2rem;
  border-radius: 10px;
  font-weight: 500;
`;
