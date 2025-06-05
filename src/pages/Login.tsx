import { TextField } from '@mui/material';
import styled from 'styled-components';
import welcomeImage from '../assets/Login_Welcoming.png'
import { Link } from 'react-router-dom';

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

function Login() {
  return (
    <Pagecontainer>
      <Gridcontainer>
        <div className='image-container'>
          <img src={welcomeImage} />
        </div>
        <Form action="/userLogin" method="post">

          <h1 className="log-header">LOGIN</h1>

          <TextField
            id="outlined-password-input"
            label="Login"
            type="email"
            name='email'
            autoComplete="current-password"
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name='password'
            autoComplete="current-password"
          />

          <a href="#"><p>Forgot Your Password?</p></a>

          <input type="submit" value="Sign In" className="sub-btn btn btn-primary" onSubmit={e => e.preventDefault()}/>
          <p>Don't have an account? <Link to='/Signup'>Register</Link></p>
        </Form>
      </Gridcontainer>
    </Pagecontainer>
  )
}

export default Login;