import { Container, Row, Col } from "react-bootstrap";

// Template Page for copy & Paste
export default function TemplatePage() {
  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
      {/* Template for playground Components */}
      <div className="playgroundContentBox">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <div className="content">
                {/* Comments */}
                <h2>Centered Content</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
