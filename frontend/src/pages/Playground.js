import Nav from "react-bootstrap/Nav";

import { useEffect, useState } from "react";

import PythonBasics from "../components/playground_components/PythonBasics";
import ReactBasics from "../components/playground_components/ReactBasics";
import DjangoBasics from "../components/playground_components/DjangoBasics";

export default function Playground() {
  const [hash, setHash] = useState("");
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    // Function to update the hash state => needed for the onsite Tab navigation
    const updateHash = () => {
      setHash(window.location.hash.substring(1)); // Remove the '#' symbol
      setActiveKey(hash);
    };

    // Update hash on component mount
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [hash]);

  let ComponentToRender;
  let componentName = hash;

  switch (componentName) {
    case "PythonBasics":
      ComponentToRender = () => <PythonBasics />;
      break;
    case "ReactBasics":
      ComponentToRender = () => <ReactBasics />;
      break;
    case "DjangoBasics":
      ComponentToRender = () => <DjangoBasics />;
      break;
    default:
      ComponentToRender = () => <div>Error on Page</div>;
  }

  return (
    <div>
      <h1>DEV Playground</h1>
      {/* defaultActiveKey="#PythonBasics" */}
      <Nav variant="tabs" activeKey={activeKey}>
        <Nav.Item>
          <Nav.Link href="#PythonBasics" eventKey="PythonBasics">
            Python Basics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#ReactBasics">React Basics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#DjangoBasics" eventKey="DjangoBasics">
            Django Basics
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <ComponentToRender />
    </div>
  );
}
