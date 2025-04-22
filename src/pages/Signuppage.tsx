
import { TextField } from '@mui/material';
import styled from 'styled-components';
import welcomeImage from '../assets/Login_Welcoming.png'

const Pagecontainer = styled.section`
  min-height:100vh;
  background-color: #f5f5f5;
  padding: 3rem;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #fff;
  box-shadow: 1px 1px 10px #e0e0e0e0;

  .image-container {
    position: relative;
    display: grid;
    place-items: center;
    padding: 1rem;
    background: #e7e7e7;

    img {
      position: relative;
      bottom: 0;
      width: 100%;
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

function SignupPage() {
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
          <p>Don't have an account? <a href="register.html">Register</a></p>
        </Form>
      </Gridcontainer>
    </Pagecontainer>
  )
}

export default SignupPage;