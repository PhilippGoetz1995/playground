import { Container, Row, Col, Table } from "react-bootstrap";

export default function Bootstrap() {
  return (
    <>
      <div className="playgroundContentBox">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="content">
                <h2>Basics</h2>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Breakpoint</th>
                      <th>Class infix </th>
                      <th>Dimensions </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Extra Small</td>
                      <td>sm</td>
                      <td>576px</td>
                    </tr>
                    <tr>
                      <td>Small</td>
                      <td>sm</td>
                      <td>≥576px</td>
                    </tr>
                    <tr>
                      <td>Medium</td>
                      <td>md</td>
                      <td>≥768px</td>
                    </tr>
                    <tr>
                      <td>Large</td>
                      <td>lg</td>
                      <td>≥992px</td>
                    </tr>
                    <tr>
                      <td>Extra large</td>
                      <td>xl</td>
                      <td>≥1200px</td>
                    </tr>
                    <tr>
                      <td>Extra extra large</td>
                      <td>xxl</td>
                      <td>≥1400px</td>
                    </tr>
                  </tbody>
                </Table>
                <h3>Basic 12 Grid Layout</h3>
                <p>
                  Design will from this breakpoint for example here: xs=1 sm=2
                  md=3 lg=4
                </p>
                <Container>
                  <Row>
                    <Col className="bootstrapExampleColumn">
                      <p>1</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>2</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>3</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>4</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>5</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>6</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>7</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>8</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>9</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>10</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>11</p>
                    </Col>
                    <Col className="bootstrapExampleColumn">
                      <p>12</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      xs={1}
                      sm={2}
                      md={3}
                      lg={4}
                      className="bootstrapExampleColumn"
                    >
                      <p>1</p>
                    </Col>
                  </Row>
                </Container>

                <h4>Center Content with justify</h4>
                <Container>
                  <Row className="justify-content-center">
                    <Col xs={1} className="bootstrapExampleColumn">
                      <p>1</p>
                    </Col>
                  </Row>
                </Container>

                <h4>Width based on Content</h4>
                <Container>
                  <Row className="justify-content-center">
                    <Col className="bootstrapExampleColumn col-md-auto">
                      <p> Das ist Content </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
