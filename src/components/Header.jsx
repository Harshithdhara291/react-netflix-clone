import React from 'react'
import netflixLogoImage from '../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function Header(){

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Navbar>
      <Image src={netflixLogoImage} alt='netflix-logo' />
      {currentPath==='/in' && <Linkk to={'/login'} ><Button>Sign In</Button></Linkk>}
    </Navbar>
  )
}

const Navbar = styled.nav`
    width: 80%;
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background: transparent;
`
const Image = styled.img`
    height: 5rem;
    width: 10rem;
`
const Button = styled.button`
    background-color: #E50914;
    color: #fff;
    padding: .6rem 1.2rem;
    border: none;
    font-weight:600;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
      background-color: #e0121dd6;
    }
`

const Linkk = styled(Link)`
  color: #fff;
  text-decoration: none;
`
