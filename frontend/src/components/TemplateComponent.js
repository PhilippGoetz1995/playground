import { Container, Row, Col } from "react-bootstrap";

export default function TemplateComponent({ id }) {
  return (
    // Template for playground Components
    <div class="playgroundContentBox">
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
  );
}
