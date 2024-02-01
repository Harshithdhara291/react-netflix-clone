import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import backgroundImage from '../assets/home.jpg'
import image from '../assets/homeTitle.webp'
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

export default function Netflix(){

  const [isScrolled,setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset===0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <Container>
        <div><Navbar isScrolled={isScrolled} /></div>
        <HeroContainer>
          <img src={image} alt="netflix-logo" />
          <div>
            <ButtonPlay><FaPlay/> Play</ButtonPlay>
            <ButtonInfo><FiInfo/> More Info</ButtonInfo>
          </div>
        </HeroContainer>
    </Container>
    
  )
}

const Container = styled.div`
  min-height: 140vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.404); 
  }
  div{
    filter: brightness(100%);
  }
`

const HeroContainer = styled.div`
  /* border: 1px solid white; */
  height: 35rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  div{
    /* border: 1px solid white; */
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
  }
`
const ButtonPlay = styled.button`
  background-color: #ffffffce;
  width: 7rem;
  padding: .5rem;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover{
    background-color: #ffffffab;
  }
`

const ButtonInfo = styled.button`
  background-color: #4d4c4cb3;
  color: #fff;
  width: 8rem;
  padding: .6rem;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover{
    background-color: #444343;
  }
`