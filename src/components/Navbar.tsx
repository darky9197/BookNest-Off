import "react";
import { useState } from "react";
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
    font-weight: 900;
    font-size: 2rem;
    margin: 0;
  }
`

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavbarContainer>
      <h1>BOOKNEST</h1>
      {(isLoggedIn) ? 
        <div className="d-flex gap-2">
          <Link to="/Signin" className="btn btn-dark">
            Login
          </Link>
          <Link to="/Signup" className="btn btn-dark">
            Register
          </Link>
        </div> : 
          <div className="d-flex gap-2">
            
        </div>
        }
    </NavbarContainer>
  );
};

export default Navbar;
