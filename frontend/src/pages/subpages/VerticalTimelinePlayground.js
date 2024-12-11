import { Container, Row, Col } from "react-bootstrap";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useInView } from "react-intersection-observer";

// CSS for the Gallery
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "../media/redbull_logo.png",
    thumbnail: "../media/redbull_logo.png",
  },
  {
    original: "../media/redbull_logo.png",
    thumbnail: "../media/redbull_logo.png",
  },
];

// Template Page for copy & Paste
export default function VerticalTimelinePlayground() {
  const { ref: myRef, inView: myElementIsVisible, entry } = useInView();

  console.log(myElementIsVisible);

  return (
    <>
      {/* Template for playground Components */}
      <div className="playgroundContentBox">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={12}>
              <div className="content" style={{ backgroundColor: "grey" }}>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2011 - present"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon=""
                  >
                    <img
                      src="../media/redbull_logo.png"
                      style={{
                        width: "100px",
                        right: "15px",
                        position: "absolute",
                      }}
                      alt="Test"
                    ></img>
                    <h3 className="vertical-timeline-element-title">
                      Creative Director
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                      Miami, FL
                    </h4>
                    <p>
                      Creative Direction, User Experience, Visual Design,
                      Project Management, Team Leading
                    </p>
                    <img src="../media/2.png" style={{ width: "100%" }}></img>
                    <ImageGallery items={images} />
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon=""
                  >
                    <h3 className="vertical-timeline-element-title">
                      Art Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      San Francisco, CA
                    </h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, SEO,
                      Online Marketing
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon=""
                  >
                    <h3 className="vertical-timeline-element-title">
                      Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Los Angeles, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon=""
                  >
                    <h3 className="vertical-timeline-element-title">
                      Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      San Francisco, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon=""
                  >
                    <h3 className="vertical-timeline-element-title">
                      Content Marketing for Web, Mobile and Social Media
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Online Course
                    </h4>
                    <p>Strategy, Social Media</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon=""
                  >
                    <h3 className="vertical-timeline-element-title">
                      Agile Development Scrum Master
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Certification
                    </h4>
                    <p>Creative Direction, User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                    icon=""
                  >
                    <h3 className="vertical-timeline-element-title">
                      Bachelor of Science in Interactive Digital Media Visual
                      Imaging
                    </h3>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "red",
                      }}
                    >
                      TEST
                    </div>
                    <h4 className="vertical-timeline-element-subtitle">
                      Bachelor Degree
                    </h4>
                    <p>Creative Direction, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                    icon=""
                  />
                </VerticalTimeline>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
