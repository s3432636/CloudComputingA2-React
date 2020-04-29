import React, { Component } from "react";
import logo from './../logo.svg';
import './../css/App.css';
import { Card, CardGroup, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class GameCard extends Component {
    render() {
        return (
            <React.Fragment>
                <Card style={{ width: '18rem' }}>
                    {/* Could be a game location or a Team Vs Tean Image */}
                    <Card.Img variant="top" src={"https://cdn.dribbble.com/users/1222550/screenshots/4524432/b1db1259207091.5a198e7cae3cb.png"} />
                    <Card.Body>

                        <Card.Title>Game/Match Name/Number</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Team/Subtitle</Card.Subtitle>
                        <Card.Text>
                            Match Description.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <b>Location</b>
                            <p>Melbourne Basketball Center</p>
                        </ListGroupItem>
                        <ListGroupItem><b>Match Times:</b> Monday Nights, 6-9PM</ListGroupItem>
                    </ListGroup>
                </Card>
            </React.Fragment>
        );
    }
}

export default GameCard;



