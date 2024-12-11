import { Container, Row, Col } from "react-bootstrap";

// Template Page for copy & Paste
export default function TemplatePage() {
  return (
    <>
      {/* Template for playground Components */}
      <div className="playgroundContentBox">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <div className="content"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
