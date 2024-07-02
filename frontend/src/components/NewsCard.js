import { Card, Button } from "react-bootstrap";

export default function NewsCard({ id, title, description, image }) {
  const imageURL = "http://127.0.0.1:8000/" + image;

  return (
    <div className="col" key={id}>
      <Card>
        <div style={{ overflow: "hidden", height: "150px" }}>
          <Card.Img
            variant="top"
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              height: "100%", // Maintain the height of the parent div (card body)
            }}
            src={imageURL}
          />
        </div>
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
