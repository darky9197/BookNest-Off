import "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: var(--background-clr-2);
  width: 100%;
  color: #000;
  font-family: "Archivo";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1rem;
  border-bottom: 1px solid #a7a7a7;
  min-height: 10vh;

  h1 {
    cursor: pointer;
    font-weight: 600;
  }
`;

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <h1>BookNest</h1>
      <div className="d-flex gap-2">
        <Link to="/Login" className="btn btn-dark">
          Login
        </Link>
        <Link to="#" className="btn btn-dark">
          Register
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
