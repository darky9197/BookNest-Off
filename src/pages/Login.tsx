import { TextField } from '@mui/material';
import styled from 'styled-components';
import welcomeImage from '../assets/Login_Welcoming.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Pagecontainer = styled.section`
  min-height:100vh;
  background-color: #f5f5f5;
  padding: 3rem;
  display: grid;
  place-items: center;
  
`

const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  box-shadow: 1px 1px 10px #e0e0e0e0;

  .image-container {
    display: flex;
    background: #e7e7e7;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
`

const Form = styled.form`
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  text-align: center;
  padding:2rem;
`

const ErrorText = styled.p`
  color: ${(props) => (props.errcode == 2) ? "red" : "#44d626"};
  font-weight: 600;
`

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/authUser", user);
      const data = response.data;
      if (data.login) {
        localStorage.setItem("userToken", JSON.stringify({ log: data.login, email: data.email }))
        setError(1);
        window.location.href = '/';
        return;
      }
      setError(2);
    } catch (error) {
      setError(2)
      console.error(error);
    }
  }

  return (
    <Pagecontainer>
      <Gridcontainer>
        <div className='image-container'>
          <img src={welcomeImage} />
        </div>
        <Form onSubmit={handleLogin}>
          <h1 className="log-header">LOGIN</h1>
          {error != 0 && <ErrorText errcode={error}>{(error == 1) ? "Login Successful !!" : "Invalid Email or Password"}</ErrorText>}
          <TextField
            id="email"
            label="Login"
            type="email"
            name='email'
            // autoComplete="current-password"
            value={user.email}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value
              })
            }}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            name='password'
            autoComplete="current-password"
            value={user.password}
            // autoComplete="current-password"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value
              })
            }}
          />

          <a href="#"><p>Forgot Your Password?</p></a>
          <button type="submit" className="sub-btn btn btn-primary">Sign In</button>
          <p>Don't have an account? <Link to='/Signup'>Register</Link></p>
        </Form>
      </Gridcontainer>
    </Pagecontainer>
  )
}

export default Login;