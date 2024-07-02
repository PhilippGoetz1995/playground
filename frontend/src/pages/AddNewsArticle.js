import { baseUrl } from "../shared";

import { Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

export default function AddNewsArticle() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const HandleTextChange = (e) => {
    //First unpack everything from the existing formData and add then the new input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  //Define new submit function which interact asynchron to not block other processes
  const handleSubmit = async (e) => {
    //Basic handlich should be deactivated
    e.preventDefault();

    const url = baseUrl + "api/addnewsarticle/";

    let form_data = new FormData();

    form_data.append("title", formData.title);
    form_data.append("description", formData.description);
    form_data.append("image", formData.image, formData.image.name);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: form_data,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //Handle success
      console.log("Form data successfully submitted!");

      navigate("/newsoverview");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }

    // OLD UPLOAD WITH ONLY TEXT => stringify the content
    // try {
    //   console.log(JSON.stringify(formData));

    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "text/html; charset=utf-8",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   //Handle success
    //   console.log("Form data successfully submitted!");
    // } catch (error) {
    //   // Handle error
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <>
      <h1>Add a new Article</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={HandleTextChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={HandleTextChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image Upload</Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
