import React, { useState } from "react";
import netflixLogoImage from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaPowerOff } from "react-icons/fa";

const linksArray = [
  { name: "Home", link: "/" },
  { name: "TV Shows", link: "/tv" },
  { name: "Movies", link: "/movies" },
  { name: "My List", link: "/mylist" },
];

export default function Navbar({isScrolled}) {
  const [showSearch, setshowSearch] = useState(false);
  const [inputHover, setinputHover] = useState(false);

  return (
    <Navbarr>
        <nav className={`${isScrolled ? "scrolled" : ""}`}>
      <FirstCont>
        <Image src={netflixLogoImage} alt="netflix-logo" />
        <UnList>
          {linksArray.map(({ name, link }) => {
            return (
              <li key={name}>
                <Linkk to={link}>{name}</Linkk>
              </li>
            );
          })}
        </UnList>
      </FirstCont>
      <LinksCont>
        <div className={`search ${showSearch ? "show-search" : ""}`}>
          <button
            onFocus={() => setshowSearch(true)}
            onBlur={() => {
              if (!inputHover) {
                setshowSearch(false);
              }
            }}
          >
            <FaSearchIcon />
          </button>
          <input
            type="search"
            placeholder="Search..."
            onMouseEnter={() => setinputHover(true)}
            onMouseLeave={() => setinputHover(false)}
            onBlur={() => {
              setinputHover(false);
              setshowSearch(false);
            }}
          />
        </div>
        <Linkk to={"/login"}>
          <FaPowerOffIcon />
        </Linkk>
      </LinksCont>
      </nav>
    </Navbarr>
  );
}

const Navbarr = styled.div`
  z-index: 999;
  .scrolled{
    background-color:black;
  }
  nav{
    width: 97%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    transition: 0.3s ease-in-out;
  }
`;

const Image = styled.img`
  height: 5rem;
  width: 10rem;
`;

const FirstCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UnList = styled.ul`
  width: 20rem;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    text-decoration: none;
  }
`;
const Linkk = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const LinksCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 1rem;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .search{
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    input{
        width: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
        background-color: transparent;
        border: none;
        color: white;
        &:focus{
            outline: none;
        }
    }
  }
  .show-search{
    border: 1px solid #ffffff;
    background-color: rgba(0,0,0,0.6);
    gap: 0rem;
    border-radius: 6px;
    margin-right: 1.5rem;
    input{
        width: 100%;
        opacity: 1;
        visibility: visible;
        padding: 0.5rem;
        font-size: 1rem;
    }
  }
`;

const FaSearchIcon = styled(FaSearch)`
  color: #eef1f1;
  font-size: 1.2rem;
`;

const FaPowerOffIcon = styled(FaPowerOff)`
  color: #f75c5c;
  font-size: 1.2rem;
`;
