import Nav from "react-bootstrap/Nav";

import { useEffect, useState } from "react";

import Python from "./subpages/Python";
import REACT_Basics from "./subpages/REACT_Basics";
import DJANGO_Basics from "./subpages/DJANGO_Basics";
import Bootstrap from "./subpages/Bootstrap";
import REACT_VerticalTimelinePlayground from "./subpages/REACT_VerticalTimelinePlayground";

export default function Playground() {
  const [hash, setHash] = useState("");
  const [mainActiveKey, setMainActiveKey] = useState("");
  const [subActiveKey, setSubActiveKey] = useState("");

  const [showReactSubmenu, setShowReactSubmenu] = useState(false);

  useEffect(() => {
    // Function to update the hash state => needed for the onsite Tab navigation
    const updateHash = () => {
      setHash(window.location.hash.substring(1)); // Remove the '#' symbol
      setMainActiveKey(hash);
    };

    // Update hash on component mount
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    const currentHash = window.location.hash.substring(1);

    if (["React"].includes(currentHash)) {
      setShowReactSubmenu(true);
    } else {
      setShowReactSubmenu(false);
    }


    if (["REACT_Basics", "REACT_VerticalTimelinePlayground"].includes(currentHash)) {
      setMainActiveKey("REACT_Basics");
      setSubActiveKey(currentHash);
      setShowReactSubmenu(true);
    } else if (["Python", "PythonIntro", "PythonAdvanced"].includes(currentHash)) {
      setMainActiveKey("Python");
      setSubActiveKey(currentHash);
      setShowReactSubmenu(false);
    } else {
      setMainActiveKey(currentHash);
      setSubActiveKey("");
      setShowReactSubmenu(false);
    }

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
    case "REACT_Basics":
      ComponentToRender = () => <REACT_Basics />;
      break;
    case "REACT_VerticalTimelinePlayground":
      ComponentToRender = () => <REACT_VerticalTimelinePlayground />;
      break;
    case "Django":
      ComponentToRender = () => <DJANGO_Basics />;
      break;
    case "Bootstrap":
      ComponentToRender = () => <Bootstrap />;
      break;
    default:
      ComponentToRender = () => <div>Error on Page</div>;
  }

  return (
    <div>
      <h1>DEV Playground</h1>
      <Nav variant="tabs" activeKey={mainActiveKey} >
        <Nav.Item>
          <Nav.Link
            eventKey="Python"
            href="#Python"
          >
            Python
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#REACT_Basics" eventKey="REACT_Basics" onClick={() => setShowReactSubmenu(!setShowReactSubmenu)}>
            React ▾
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
      </Nav>

      {/* Submenu row (renders as part of the layout, below tabs) */}
      {showReactSubmenu && (
        <Nav className="py-2 px-3 border-bottom gap-3" variant="pills" activeKey={subActiveKey} style={{ background: "#f8f9fa" }}>
          <Nav.Item>
            <Nav.Link href="#REACT_Basics" eventKey="REACT_Basics">
              Basics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#REACT_VerticalTimelinePlayground" eventKey="REACT_VerticalTimelinePlayground">
            VerticalTimeline
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}

      <ComponentToRender />
    </div>
  );
}
