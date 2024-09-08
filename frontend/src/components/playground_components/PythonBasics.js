import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Container, Row, Col } from "react-bootstrap";

export default function PythonBasic() {
  const Code = `# Variables and String Manipulation
name = "Alice"
age = 30

print("Name:", name)
print("Age:", age)

# String concatenation
greeting = "Hello, " + name + "!"
print(greeting)

# String formatting
formatted_greeting = f"Hello, {name}! You are {age} years old."
print(formatted_greeting)`;

  return (
    <div class="playgroundContentBox">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={12}>
            <div className="content">
              {/* Your content goes here */}
              <h1>Centered Content</h1>
              <p>This content is centered and spans 10 out of 12 columns.</p>

              <div className="codesnip">
                <SyntaxHighlighter
                  language="python"
                  style={atomOneDark}
                  customStyle={{ padding: "25px", fontSize: "17px" }}
                  wrapLongLines={true}
                >
                  {Code}
                </SyntaxHighlighter>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
