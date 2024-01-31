import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the form data using Axios
      const response = await axios.post(
        "https://shopify-backend-ah7e.onrender.com/register",
        formData
      );
      handleClick()
      console.log("Registration successful", response);
      setLoading(false);
    //   navigate("/login");
    } catch (error) {
      handleClick()
      console.error("Registration failed", error);
      setLoading(false);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const snackbar = () => {
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    );
  };

  return (
    <Container>
      <Nav>
        <Header />
        <Linkk to={"/login"}>
          <Button>Sign In</Button>
        </Linkk>
      </Nav>
      {step === 1 ? (
        <FirstContainer>
          <p>STEP 1 OF 2</p>
          <h1>Finish setting up your account</h1>
          <p>
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <button onClick={() => setStep(2)}>Next</button>
        </FirstContainer>
      ) : (
        <FormContainer onSubmit={handleSubmit}>
          <p>STEP 2 OF 2</p>
          <h1>Create a password to start your membership</h1>
          <p>
            Just a few more steps and you're done!<br></br> We hate paperwork,
            too.
          </p>
          <input
            type="text"
            placeholder="Username"
            required
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Add Password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </FormContainer>
      )}
      {snackbar()}
      <button onClick={handleClick}>Open Snackbar</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  height: 100vh;
`;

const Nav = styled.div`
  width: 97%;
  border-bottom: 1px solid #ccc;
  padding: 0.2rem 1rem 0.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Linkk = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Button = styled.button`
  background-color: #fff;
  color: #333333;
  padding: 0.6rem 1.2rem;
  border: none;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FirstContainer = styled.div`
  margin-top: 6rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: #333333;
  p {
    font-weight: 500;
  }
  h1 {
    margin: 0;
  }
  button {
    background-color: #e50914;
    color: #fff;
    width: 60%;
    border: none;
    height: 3rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 1rem;
    &:hover {
      background-color: #cf1d26;
    }
  }
`;

const FormContainer = styled.form`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 65vh;
  width: 40%;
  margin-top: 3rem;
  background-color: #ffffff;
  color: #333333;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    color: #333333;
    font-weight: 500;
  }
  input {
    width: 80%;
    height: 2rem;
    outline: none;
    padding: 0.7rem;
    border: 1px solid #0000007d;
    font-size: 1.2rem;
    border-radius: 4px;
    background-color: transparent;
    color: #111111;
    transition: border-color 0.3s;
    &:focus {
      outline: #000000 solid 2px; /* Remove the default outline */
    }
  }
  button {
    background-color: #e50914;
    color: #fff;
    width: 85%;
    border: none;
    height: 3rem;
    padding: 0.7rem;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
      background-color: #cf1d26;
      &:disabled {
        background-color: #b5b5b5; /* Set the background color for the disabled state */
        color: #666666; /* Set the text color for the disabled state */
        cursor: not-allowed;
      }
    }
  }
`;
