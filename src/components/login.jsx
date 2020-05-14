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
import logo from "./../signuppage.jpg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: "",
    auth_token: "",
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
    console.log(this.state);
  };

  constructor() {
    super();
    this.textInput = null;
    this.setTextInputRef = (element) => {
      this.textInput = element;
    };
  }

  onChange = (e) => {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  };

  saveState = (e) => {
    this.props.submitEmail(this.state.email);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    fetch("http://https://calm-depot-272109.ts.r.appspot.com/authenticate", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((obj) => {
        if (obj.status == 200) {
          localStorage.setItem("currentUser", obj.body.user.name);
          localStorage.setItem("auth_token", obj.body.auth_token);
          this.setState({ username: obj.body.user.name });
          this.setState({ auth_token: obj.body.auth_token });
          this.props.submitUser(
            this.state.email,
            this.state.username,
            this.state.auth_token
          );
          this.props.history.push("teams");
          // window.location.href = "http://localhost:3006/teams";
        } else {
          this.setState({ error: "Error Logging in" });
          this.setState({ email: "" });
          this.setState({ password: "" });
          localStorage.setItem("currentUser", "");
          localStorage.setItem("auth_token", "");
          console.log("do an error");
          alert("Invalid Login Details");
          window.location.href = "http://localhost:3006/login";
        }
        console.log(obj);
      });
  };
  render() {
    const { email, password, input } = this.state;
    return (
      <Container className="login">
        <Row>
          <Col>
            <div>
              <Card className="signup-login-card">
                <Card.Title className="App">Login</Card.Title>
                <p> {this.state.error}</p>
                <Card.Text>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Email">
                      <Form.Control
                        name="email"
                        type="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="Password">
                      <Form.Control
                        name="password"
                        input
                        type="password"
                        placeholder="Password"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Login to Playerly
                    </Button>
                  </Form>
                </Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    email: state.user.email,
    username: state.user.name,
    auth_token: state.user.auth_token,
  };
}

function doSubmitUser(email, username, auth_token) {
  return {
    type: "SUBMIT_USER",
    email: email,
    username: username,
    auth_token: auth_token,
  };
}

const mapDispatchToProps = {
  submitUser: doSubmitUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
