import Nav from "react-bootstrap/Nav";

import { useEffect, useState } from "react";

import Python from "./subpages/Python";
import React from "./subpages/React";
import Django from "./subpages/Django";
import Bootstrap from "./subpages/Bootstrap";
import VerticalTimelinePlayground from "./subpages/VerticalTimelinePlayground";
import IntersectionObserverDemo from "./subpages/IntersectionObserverDemo";

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
    case "Python":
      ComponentToRender = () => <Python />;
      break;
    case "React":
      ComponentToRender = () => <React />;
      break;
    case "Django":
      ComponentToRender = () => <Django />;
      break;
    case "Bootstrap":
      ComponentToRender = () => <Bootstrap />;
      break;
    case "VerticalTimelinePlayground":
      ComponentToRender = () => <VerticalTimelinePlayground />;
      break;
    case "IntersectionObserverDemo":
      ComponentToRender = () => <IntersectionObserverDemo />;
      break;
    default:
      ComponentToRender = () => <div>Error on Page</div>;
  }

  return (
    <div>
      <h1>DEV Playground</h1>
      <Nav variant="tabs" activeKey={activeKey}>
        <Nav.Item>
          <Nav.Link href="#Python" eventKey="Python">
            Python
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#React" eventKey="React">
            React
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Django" eventKey="Django">
            Django
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#Bootstrap" eventKey="Bootstrap">
            Bootstrap
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#VerticalTimelinePlayground"
            eventKey="VerticalTimelinePlayground"
          >
            VerticalTimeline
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#IntersectionObserverDemo"
            eventKey="IntersectionObserverDemo"
          >
            VerticalTimeline
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <ComponentToRender />
    </div>
  );
}
