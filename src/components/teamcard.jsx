import {
    Card,
    CardGroup,
    ListGroupItem,
    ListGroup,
    Button
} from 'react-bootstrap';
import React, { Component } from "react";
import logo from './../logo.svg';
import './../css/App.css';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"https://storage.googleapis.com/playerlyimages/hqmd9yLv_400x400.jpg"} />
                    <Card.Body>
                        <Card.Title>Gorrilas</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Basketball</Card.Subtitle>
                        <Card.Text>
                            Friendly basketball team playing at Melbourne Basketball Center.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Skill Level:</b> Intermediate</ListGroupItem>
                        <ListGroupItem>
                            <b>Location</b>
                            <p>Melbourne Basketball Center</p>
                        </ListGroupItem>
                        <ListGroupItem><b>Times:</b> Monday Nights, 6-9PM</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="primary">Join Team</Button>
                        <Button href="teamprofile" variant="secodary">View Profile</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default Team;
