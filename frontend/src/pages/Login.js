import { useState, useEffect, useContext } from "react";
import { baseUrl } from "../shared";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

import { Form, Button } from "react-bootstrap";

export default function Login() {
  const navigate = useNavigate();
  //const [logedIn, setLoggedIn] = useState();

  //const [loggedIn, login] = useContext(LoginContext);

  const { loggedIn, login } = useContext(LoginContext);

  //const loggedInState = useContext(LoginContext);

  //const [loggedIn, setLoggedIn] = useContext(LoginContext);

  //console.log(loggedIn);

  //const [loggedIn, setLoggedIn] = useContext(LoginContext);

  //   const [formData, setFormData] = useState({
  //     username: "",
  //     password: "",
  //   });
  //   const HandleTextChange = (e) => {
  //     //First unpack everything from the existing formData and add then the new input
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    //Basic handlich should be deactivated
    e.preventDefault();

    const url = baseUrl + "api/login/";

    //console.log(JSON.stringify(formData));

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //Handle success
      console.log("Form data successfully submitted!");
      //Set the global state to logged in
      login();
      navigate("/newsoverview");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <h1>Login without JWT</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="passwortd">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
