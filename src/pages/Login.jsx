import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import  loginImage from '../assets/login.jpg'
import { Link } from 'react-router-dom'

export default function Login(){
  return (
    <Container>
        < Header />
            <FormContainer>
                <h2>Sign In</h2>
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Password' required/>
                <button type='submit'>Sign In</button>
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