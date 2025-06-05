import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import { VisibilityOff } from '@mui/icons-material';

import welcomeImage from '../assets/student_presenting.png'

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
  padding: 2rem;
`

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Pagecontainer>
      <Gridcontainer>
        <div className='image-container'>
          <img src={welcomeImage} />
        </div>
        <Form action="/userLogin" method="post">

          <h1 className="log-header">Signup</h1>

          <TextField
            id="outlined-password-input"
            label="Name"
            type="text"
            name='name'
          />

          <TextField
            id="outlined-password-input"
            label="College Name"
            type="text"
            name='college_name'
          />

          <TextField
            id="outlined-password-input"
            label="College Code"
            type="text"
            name='college_code'
            autoComplete="current-password"
          />

          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            name='email'
            autoComplete="current-password"
          />

          <TextField
            id="outlined-password-input"
            label="Whatsapp Number"
            type="text"
            name='whatsapp_number'
            autoComplete="current-password"
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>

          <a href="#"><p>Forgot Your Password?</p></a>

          <input type="submit" value="Sign up" className="sub-btn btn btn-primary" onSubmit={e => e.preventDefault()} />
          <p>Already have an account? <Link to='/Signin'>Signin</Link></p>
        </Form>
      </Gridcontainer>
    </Pagecontainer>
  )
}

export default Register;