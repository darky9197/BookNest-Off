import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import { VisibilityOff } from '@mui/icons-material';

import welcomeImage from '../assets/student_presenting.png'
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
  padding: 2rem;
`

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    college_name: "",
    college_code: "",
    email: "",
    mobile: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/addUser",
        {
          personal_data: {
            ...registerData,
            college_code: Number.parseInt(registerData.college_code)
          },
          account_data: {}
        }
      );
      const data = response.data;
      if (data.login) {
        localStorage.setItem("userToken", JSON.stringify({ log: data.login, email: data.email }))
        window.location.href = '/';
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Pagecontainer>
      <Gridcontainer>
        <div className='image-container'>
          <img src={welcomeImage} />
        </div>
        <Form onSubmit={handleRegister}>

          <h1 className="log-header">Signup</h1>

          <TextField
            label="Name"
            type="text"
            name='name'
            value={registerData.name}
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                name: e.target.value
              })
            }}
          />

          <TextField
            label="College Name"
            type="text"
            name='college_name'
            value={registerData.college_name}
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                college_name: e.target.value
              })
            }}
          />

          <TextField
            label="College Code"
            type="text"
            name='college_code'
            autoComplete="current-password"
            value={registerData.college_code}
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                college_code: e.target.value
              })
            }}
          />

          <TextField
            label="Email"
            type="email"
            name='email'
            autoComplete="current-password"
            value={registerData.email}
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                email: e.target.value
              })
            }}
          />

          <TextField
            label="Whatsapp Number"
            type="text"
            name='whatsapp_number'
            autoComplete="current-password"
            value={registerData.mobile}
            onChange={(e) => {
              setRegisterData({
                ...registerData,
                mobile: e.target.value
              })
            }}
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
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
              value={registerData.password}
              onChange={(e) => {
                setRegisterData({
                  ...registerData,
                  password: e.target.value
                })
              }}
            />
          </FormControl>

          {/* <FormControl variant="outlined">
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="confirm-password"
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
          </FormControl> */}


          <button type="submit" className="p-3 sub-btn btn btn-primary">Sign up</button>
          <p>Already have an account? <Link to='/Signin'>Signin</Link></p>
        </Form>
      </Gridcontainer>
    </Pagecontainer>
  )
}

export default Register;