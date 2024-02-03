import React from 'react'
import styled from 'styled-components'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import videoUrl from '../assets/video.mp4.mp4'
export default function Player () {
    const navigate = useNavigate()
  return (
    <Container>
        <div className='player'>
            <div className='back'>
                <BsArrowLeftIcon onClick={()=>navigate(-1)} />
            </div>
            <video src={videoUrl} autoPlay loop controls ></video>
        </div>
    </Container>
  )
}

const Container = styled.div`
   .player{
        height: 100vh;
        /* width: 95vw; */
   }
   .back{
    position: absolute;
    z-index: 1;
    padding: 2rem;
   }
   video{
    height: 100%;
    width: 100%;
    object-fit: cover;
   }
`

const BsArrowLeftIcon = styled(BsArrowLeft)`
    color: #ffffff;
    font-size: 1.3rem;
    cursor: pointer;
`