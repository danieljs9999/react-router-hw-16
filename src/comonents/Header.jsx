import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "activeLink" : "noActiveLink");

function Header() {
  return (
    <HeaderStyle>
      <nav>
        <h1>LOGO</h1>
        <Ul>
          <LiNavLink>
            <NavLink to="/products" className={setActive}>
              Products
            </NavLink>
          </LiNavLink>
          <LiNavLink>
            <NavLink to="/myCart" className={setActive}>
              My Cart
            </NavLink>
          </LiNavLink>
          <LiNavLink>
            <NavLink to="/myOrders" className={setActive}>
              My Orders
            </NavLink>
          </LiNavLink>
        </Ul>
      </nav>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  margin: 0;
  background-color: #1e90ff;
  width: 100%;
  padding: 20px 50px;
  font-size: 20px;
  color: white;
  font-weight: bold;

  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  nav {
    display: flex;
    justify-content: space-between;
  }

  .activeLink {
    color: #000000;
    text-decoration: none;
  }

  .noActiveLink {
    color: white;
    text-decoration: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px 60px 0px 0px;
  justify-content: space-between;
  gap: 60px;
  font-size: 2rem;
`;

const LiNavLink = styled.li`
  cursor: pointer;
  text-decoration: none;
  position: relative;
  /* color: white; */

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    margin: -5px 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
