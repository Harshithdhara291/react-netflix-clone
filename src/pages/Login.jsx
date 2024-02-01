import React, { useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import  loginImage from '../assets/login.jpg'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BiSolidError } from "react-icons/bi";

export default function Login(){

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg,setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true);

    try {
      const response = await axios.post('https://shopify-backend-ah7e.onrender.com/login', {
        email: email, 
        password: password,
      });
      console.log('Login successful', response.data);
      setLoading(false);
      setErrorMsg('')
      navigate("/");
    } catch (error) {
      console.error('Login failed', error.response.data);
      setLoading(false);
      setErrorMsg(error.response.data.message)
    }
  };


  return (
    <Container>
        < Header />
            <FormContainer onSubmit={handleLogin}>
                <h2>Sign In</h2>
                {errorMsg!=='' && <ErrorContainer>
          <span><BiSolidErrorIcon/></span>
            <p>{errorMsg}</p>
          </ErrorContainer>}
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  required/>
                <button type='submit' disabled={loading} >{loading ? "Signing In..." : "Sign In"}</button>
                <p>New to Netflix?  <Linkk to='/signup' > Sign up now.</Linkk></p>
            </FormContainer>
    </Container>
  )
}


const Container = styled.div`
    background-image:url(${loginImage});
    background-size:cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.336) 0%, rgba(0, 0, 0, 0.623) 100%);
    mix-blend-mode: multiply;
  }
`
const FormContainer = styled.form`
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
    width: 30%;
    margin-top:3rem;
    background-color:#000000ce;
    h2{
        color: #fff;
    }
    input{
        width: 64%;
        height: 2rem;
        outline: none;
        padding: .7rem;
        border: 1px solid #cccccc57;
        font-size: 1.2rem;
        border-radius: 4px;
        background-color:transparent;
        color: #fff;
        transition: border-color 0.3s;
        &:focus {
        outline: #fff solid 2px; /* Remove the default outline */
  }
    }
    button{
        background-color: #E50914;
        color: #fff;
        width: 68%;
        border: none;
        height: 3rem;
        padding: .7rem;
        font-size:1.2rem;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        &:hover{
        background-color: #cf1d26;
    }
    
    }
    p{
        color: #B0B196;
    }
`
const Linkk = styled(Link)`
    color: #fff;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

const ErrorContainer = styled.div`
  background-color: #D89D31;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 63%;
  height: 2rem;
  padding: 1rem;
  /* margin-top: 1rem; */
  border-radius: 6px;
  p{
    font-size: 1rem;
    margin: 0;
    color: #000000;
  }
  span{
    margin: 0 .6rem 0 0;
  }
`

const BiSolidErrorIcon = styled(BiSolidError)`
  font-size: 1rem; 
  margin-top:7px;
`;