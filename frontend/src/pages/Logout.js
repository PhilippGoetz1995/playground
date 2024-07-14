import { useEffect, useContext } from "react";
import { baseUrl } from "../shared";
//import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

//import { Form, Button } from "react-bootstrap";

export default function Logout() {
  //const navigate = useNavigate();
  //const [logedIn, setLoggedIn] = useState();

  const { logout } = useContext(LoginContext);

  useEffect(() => {
    const url = baseUrl + "api/logout/";

    //console.log(JSON.stringify(formData));

    //Need to be an async function otherwise it will not work
    //TODO Document asyc examples
    const logoutUser = async (e) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: null,
        });

        console.log(response);

        if (response.status !== 200) {
          console.log(response.status);

          throw new Error("Network response was not ok");
        }
        //Handle success
        console.log("Form data successfully submitted!");
        //Set the global state to logged in
        logout();
        //navigate("/newsoverview");
      } catch (error) {
        // Handle error
        console.error("Error submitting form:", error);
      }
    };

    logoutUser();
  });

  return (
    <>
      <h1>User Logged out</h1>
    </>
  );
}
