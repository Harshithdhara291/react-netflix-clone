/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import styled from "styled-components";
import backgroundImage from "../assets/home.jpg";
import image from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

export default function Netflix() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  });

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies)

  return (
    <MainContainer>
    <Container>
      <Header>
        <Navbar isScrolled={isScrolled} />
      </Header>
      <HeroContainer>
        <img src={image} alt="netflix-logo" />
        <div>
          <ButtonPlay onClick={() => navigate("/player")}>
            <FaPlay /> Play
          </ButtonPlay>
          <ButtonInfo>
            <FiInfo /> More Info
          </ButtonInfo>
        </div>
      </HeroContainer>
    </Container>
    <Slider movies={movies} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  min-height: 110vh;
  background-color: #000;
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    /* z-index: -1; */
  }
`;
const Header = styled.div`
  filter: brightness(100%);
  position: sticky;
  top: 0%;
  position: fixed;
  z-index: 999;
  width: 100%;
`;

const HeroContainer = styled.div`

  height: 35rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  img {
    z-index: 99;
  }
  div {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    z-index: 99;
  }
`;
const ButtonPlay = styled.button`
  background-color: #ffffffce;
  width: 7rem;
  padding: 0.5rem;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #ffffffab;
  }
`;

const ButtonInfo = styled.button`
  background-color: #4d4c4cb3;
  color: #fff;
  width: 8rem;
  padding: 0.6rem;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #444343;
  }
`;
