import { Container, Row, Col } from "react-bootstrap";

// To crete references to objects
import { useRef, useEffect } from "react";

import { useInView } from "react-intersection-observer";

// Template Page for copy & Paste
export default function IntersectionObserverDemo() {
  // Commented out is the manual way
  // Now i define here the ref to the specific Object
  //const myRef = useRef();
  //const [myElementIsVisible, setMyElementIsVisible] = useState();
  // Need to be in useEffect because otherwise element can potentially not there
  //   useEffect(() => {
  //     console.log("myRef", myRef.current);
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       console.log("entry", entry);
  //     });
  //     observer.observe(myRef.current);
  //   }, []);

  //This is the preDefined hook to check if an element is in viewPort or not
  const { ref: myRef, inView: myElementIsVisible, entry } = useInView();

  console.log(myElementIsVisible);

  return (
    <>
      {/* Template for playground Components */}
      <div className="playgroundContentBox">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <div className="content">
                <div style={{ height: "2000px", backgroundColor: "red" }}></div>
                <div>
                  <h2 ref={myRef}>Header inside viewport</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
