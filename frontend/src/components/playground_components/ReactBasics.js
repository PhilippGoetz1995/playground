import { Container, Row, Col, Button } from "react-bootstrap";

//Import also State from react
import { useState } from "react";

import ReactTestComponent from "./ReactTestComponent.js";

export default function ReactBasic() {
  let uhrzeit = new Date().getHours();
  let newUhrzeit;

  //Short Version of an If statement
  uhrzeit > 12 ? (newUhrzeit = "groeßer 13") : (newUhrzeit = "kleiner 12");

  //Function which will be called after click on button
  const willkommen = () => {
    alert("Hello React");
  };

  let name = "React Basics";

  /*
    1. This is creating a "state" with name "zahl" and a function "setZahl" to change the value of "state"
    2. the initial value is set to "1" with "useState(1)"
    3. A state can contain all types (numbers, boolean, string)
    */
  const [zahl, setZahl] = useState(1);

  // Add another state to change color of buttons => is initially false
  // const [color, setColor] = useState(false);

  //creating helperFunction to increase Zahl
  function increaseZahl() {
    setZahl(zahl + 1);
  }

  const [color, setColor] = useState("blue"); // Initial color

  const handleClick = () => {
    // Toggle between blue and red
    setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
  };

  return (
    <div class="playgroundContentBox">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={12}>
            <div className="content">
              {/* Comments */}
              <h2>Basics</h2>
              <p>
                Variables could be used directly in {name} und es ist
                {newUhrzeit}
              </p>
              <p>If else clauses - see code</p>
              {/* Direct output in react via JSX - only with brackets */}
              <p>{uhrzeit > 12 ? "Guten Abend" : "Guten Morgen"} </p>
              {/* Button that is calling the function willkommen onClick*/}
              <Button variant="primary" onClick={willkommen}>
                Say Hello
              </Button>
              {/*Two buttons with same function but with different ways of structure */}
              <Button onClick={increaseZahl}>+1 with helper Function</Button>
              <Button onClick={() => setZahl(zahl + 1)}>
                +1 with direct call
              </Button>

              <p>Die Zahl ist: {zahl}</p>

              {/* Create different components and handover props/properties - can be one or more */}
              {/* pass one prop to a component*/}
              <ReactTestComponent name={name} />
              {/* pass multiple props */}
              <ReactTestComponent number="1" name="James Bond" />
              <ReactTestComponent number="2" name="Ohne Limit" />
              {/* Component can be also created without any prop therefore the default one will be selected */}
              <ReactTestComponent />

              <button
                onClick={handleClick}
                style={{
                  backgroundColor: color,
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Click me for color change
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
