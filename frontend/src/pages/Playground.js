import Nav from "react-bootstrap/Nav";

import { useEffect, useState } from "react";

import PythonBasics from "../components/playground_components/PythonBasics";
import ReactBasics from "../components/playground_components/ReactBasics";

export default function Playground() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Function to update the hash state
    const updateHash = () => {
      setHash(window.location.hash.substring(1)); // Remove the '#' symbol
    };

    // Update hash on component mount
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  let ComponentToRender;
  let componentName = hash;

  switch (componentName) {
    case "PythonBasics":
      ComponentToRender = () => <PythonBasics />;
      break;
    case "ReactBasics":
      ComponentToRender = () => <ReactBasics />;
      break;
    default:
      ComponentToRender = () => <div>Error on Page</div>;
  }

  return (
    <div>
      <h1>DEV Playground</h1>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="#PythonBasics">Python Basics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#ReactBasics">React Basics</Nav.Link>
        </Nav.Item>
      </Nav>

      <ComponentToRender />
    </div>
  );
}
