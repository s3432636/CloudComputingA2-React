import React, { Component } from "react";
import logo from './../logo.svg';
import './../css/App.css';
import { Card, CardGroup, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class CompactTeam extends Component {
    render() {
        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"https://cdn.dribbble.com/users/1222550/screenshots/4524432/b1db1259207091.5a198e7cae3cb.png"} />
                    <Card.Body>
                        <Card.Title>Gorrilas</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Basketball</Card.Subtitle>
                        <Card.Text>
                            Friendly basketball team playing at Melbourne Basketball Center.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <b>Location</b>
                            <p>Melbourne Basketball Center</p>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button href="teamprofile" variant="secodary">View Profile</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>
        );
    }
}

export default CompactTeam;



