import React, {Component} from "react";
import {
    Card,
    Container,
    Row,
    Col,
    Form,
    Button,
    Footer
} from "react-bootstrap";
import "./../css/App.css";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('Your favorite sport is: ' + this.state.value);
        event.preventDefault();
      }
      
      render() {
        return (
            <Container className="signup">
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <div className="slogan">
                            <h1>Stronger together!</h1>
                            <h3>Find clubs.</h3>
                            <h3>Grow communities.</h3>
                            <h3>Support the sports you love.</h3>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Card className="signup-login-card">
                                <Card.Title className="App">Sign Up</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="Details">
                                            <Form.Control type="name" placeholder="First Name"/>
                                            <p/>
                                            <Form.Control type="name" placeholder="Last Name"/>
                                            <p/>
                                            <Form.Control type="email" placeholder="Email"/>
                                        </Form.Group>
                                        <Form.Group controlId="Username">
                                            <Form.Control type="Username" placeholder="Username"/>
                                        </Form.Group>
                                        <Form.Group controlId="Password">
                                            <Form.Control input type="password" placeholder="Password"/>
                                        </Form.Group>
                                        <Form.Group controlId="Confirm Password">
                                            <Form.Control input type="password" placeholder="Confirm Password"/>
                                        </Form.Group>
                                        <Form.Group controlId="SportPicker">
                                        <p>Pick your favorite sport:</p>
                                        <select value={this.state.value} onChange={this.handleChange}>
                                            <option value="Football">Football</option>
                                            <option value="Australian Football">Australian Football</option>
                                            <option value="Net Ball">Net Ball</option>
                                            <option value="Basketball">Basketball</option>
                                        </select>
                                        
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                           Sign Up
                                        </Button>
                                    </Form>
                                </Card.Text>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Signup;