import React, { Component } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Footer,
} from "react-bootstrap";
import "./../css/App.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class TeamRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      sport_id: "",
      description: "",
      email: "",
      profile_image: "",
      approval_type_id: 2,
      group_type_id: 1,
      has_skill_requirement: true,
      skill_level_id: 2,
      email: "",
      city: "",
      max_capacity: "",
    };
  }

  onChange = (e) => {
    console.log(this.state);
    /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRedirect = (res) => {
    if (res.status === 200) {
      // redirect here
      this.props.history.push("teams");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      description,
      email,
      max_capacity,
      profile_image,
      city,
    } = this.state;

    fetch("http://localhost:3000/api/v1/groups/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization:
        localStorage.getItem('auth_token'),
      },
      body: JSON.stringify({
        name: name,
        sport_id: 14,
        description: description,
        email: email,
        profile_image: "",
        approval_type_id: "2",
        group_type_id: "1",
        has_skill_requirement: "true",
        skill_level_id: "2",
        city: city,
        max_capacity: max_capacity,
      }),
    }).then(this.handleRedirect);
  };

  render() {
    const {
      name,
      description,
      email,
      max_capacity,
      profile_image,
      city,
    } = this.state;
    return (
      <Container className="teamregister">
        <Row>
          <Col>
            <div>
              <Card className="card-form">
                <Card.Title className="App">
                  Register your team here!
                </Card.Title>
                <Card.Text>
                  <form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Team Name"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="sportId">
                      <p>Your teams sport:</p>
                      <select value={this.state.value} onChange={this.onChange}>
                        <option value="1">Archery</option>
                        <option value="2">Badminton</option>
                        <option value="3">Baseball</option>
                        <option value="4">Basketball</option>
                      </select>
                    </Form.Group>
                    <Form.Group controlId="description">
                      <Form.Control
                        name="description"
                        type="text"
                        placeholder="Description"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="skillLevelsId">
                      <p>Your teams skill level is:</p>
                      <select value={this.state.value} onChange={this.onChange}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                      </select>
                    </Form.Group>
                    <Form.Group controlId="maxCapacity">
                      <Form.Control
                        name="max_capacity"
                        type="number"
                        placeholder="Max Capacity"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="contactEmail">
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    {/* <Form.Group controlId="contactNo">
                                            <Form.Control type="number" placeholder="Contact Number"/>
                                        </Form.Group> */}
                    {/* <Form.Group controlId="address">
                                            <Form.Control type="text" placeholder="Address"/>
                                        </Form.Group>
                                        <Form.Group controlId="suburb">
                                            <Form.Control type="text" placeholder="Suburb"/>
                                        </Form.Group>
                                        <Form.Group controlId="state">
                                            <Form.Control type="text" placeholder="State"/>
                                        </Form.Group> */}
                    <Form.Group controlId="state">
                      <Form.Control
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    {/* <Form.Group controlId="postCode">
                                            <Form.Control type="number" placeholder="Postcode"/>
                                        </Form.Group> */}
                    <Button variant="success" type="submit">
                      Sign up your team
                    </Button>
                  </form>
                </Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(TeamRegister);
