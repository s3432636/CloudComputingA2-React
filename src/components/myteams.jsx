import React, { Component, useState, useEffect } from "react";
import logo from "./../logo.svg";
import "./../css/App.css";
import {
  Card,
  CardGroup,
  CardColumns,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function MyTeams() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://https://cc2020-272109.appspot.com/api/v1/teams")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <CardColumns>
        <ul>
          {data.map((x) => (
            <Card style={{ width: "23rem" }}>
              <Card.Img variant="top" src={x.image} />
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  {x.sport}
                </Card.Subtitle>
                <ListGroup
                  className="list-group-flush">
                  <ListGroupItem>Upcoming Game: Monday 13th June 8:20PM</ListGroupItem>
                  <ListGroupItem>
                    Location: Melbourne Basketball Center
                  </ListGroupItem>
                </ListGroup>

                <Button variant="primary">View Posts</Button>
              </Card.Body>
            </Card>
          ))}
        </ul>
      </CardColumns>
    </div>
  );
}
