import React from 'react'
import styled from 'styled-components'
import  loginImage from '../assets/login.jpg'
import Header from '../components/Header'
import { FaChevronRight } from "react-icons/fa";


export default function Signup(){
  return (
    <Container>
        < Header />
        <MainCont>
            <h1>Unlimited movies, TV shows and more</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <FormContainer>
                <input type="email" placeholder='Email address' required/>
                <button type='submit'>Get Started <FaChevronRight/></button>
            </FormContainer>
        </MainCont>
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
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.493) 0%, rgba(0, 0, 0, 0.897) 100%);
    mix-blend-mode: multiply;
  }
`
const MainCont  = styled.div`
    z-index: 999;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:3rem;
    h1{
        font-size: 3rem;
        font-weight: bold;
        color: #fff;
        margin: 0;
    }
    h5{
        font-size: 1.5rem;
        font-weight: 400;
        color: #fff;
        margin: 1rem;
    }
    p{
        font-size: 1.3rem;
        font-weight: 400;
        color: #fff;
        margin: 1rem;
    }
`
const FormContainer = styled.form`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:10px;
    input{
        width: 64%;
        height: 2rem;
        outline: none;
        padding: .7rem;
        border: 1px solid #cccccc57;
        font-size: 1.2rem;
        border-radius: 4px;
        background-color:#00000088;
        color: #fff;
        transition: border-color 0.3s;
        &:focus {
        outline: #fff solid 2px; /* Remove the default outline */
  }
    }
    button{
        background-color: #E50914;
        color: #fff;
        width: 30%;
        border: none;
        height: 100%;
        font-size:1.5rem;
        font-weight: 550;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        &:hover{
        background-color: #cf1d26;
    }
    }
`