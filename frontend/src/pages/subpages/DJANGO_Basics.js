import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Django() {
  const [formData, setFormData] = useState({
    company: "",
    type: "",
  });

  const [error, setError] = useState();

  //Helper function that on everychange on the website the variables will be updated
  const HandleTextChange = (e) => {
    //First unpack everything from the existing formData and add then the new input
    // 1. e => event object that has all infos of the event in it
    // 2. e.target.name => input field name => f.e. "company"
    // 3. then change the value of the already exisitng state
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleDeleteFunction = async () => {
    const url =  "api/resetcarlist/";

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //Handle success
      console.log("Data sucessfully deleted");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  //Define new submit function which interact asynchron to not block other processes
  const handleSubmit = async (e) => {
    //Basic handlich should be deactivated
    e.preventDefault();

    const url = "api/addnewcar/";

    let form_data = new FormData();

    form_data.append("company", formData.company);
    form_data.append("type", formData.type);

    console.log(form_data);

    try {
      console.log(JSON.stringify(formData));

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //Handle success
      console.log("Form data successfully submitted!");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  const [carList, setCarList] = useState({
    id: "",
    company: "",
    variant: "",
  });

  // //Initial Load of the Webpage
  useEffect(() => {
    const url = "api/carlist/";
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        //Check if there is an error with the fetch
        if (response.status === 404) {
          //render a 404 component in this page
        } else if (response.status === 401) {
        }

        //If not return the JSON of the request
        return response.json();
      })
      .then((data) => {
        //Assign the data to "CarList" => it's an object
        setCarList({ data });
        console.log(data);
      })
      .catch((e) => {
        setError(e.message);
        console.log(error);
      });
  }, [error]); //Add error to the dependency array so if this is changing the request will be executed again

  return (
    <div className="playgroundContentBox">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="content">
              <h2>REST API</h2>
              <p>Basic Example of using DJango Backend as an REST API</p>
              <p>Add new Data to Database</p>
              <p>1. Created new Model in Django Models</p>
              <p>2. Run migrations</p>
              <p>3. Create</p>

              <p>Add a new Car:</p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    onChange={HandleTextChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="type"
                    onChange={HandleTextChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>

                <Button onClick={HandleDeleteFunction} variant="danger">
                  Reset Table
                </Button>
              </Form>

              <p>Current List of Cars:</p>

              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Variant</th>
                  </tr>
                </thead>
                <tbody>
                  {carList.data ? (
                    carList.data.map((Car) => (
                      <tr key={Car.id}>
                        <td>{Car.id}</td>
                        <td>{Car.company}</td>
                        <td>{Car.type}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>Loading...</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
