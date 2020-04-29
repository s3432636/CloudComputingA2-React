import React, { Component } from "react";

import { Button } from "react-bootstrap";
import {
  Card,
  CardGroup,
  CardDeck,
  CardColumns,
  ListGroupItem,
  ListGroup,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import MyTeam from "./myteamcard";

class MyTeamsOld extends Component {
  render() {
    return (
      <React.Fragment>
        <CardColumns>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                "https://i.pinimg.com/originals/02/0f/cc/020fcc5c03cf45a90a2ecb2eaa56902f.jpg"
              }
            />
            <Card.Body>
              <Card.Title>Frequent Flyers</Card.Title>

              <Card.Subtitle className="mb-2 text-muted">Netball</Card.Subtitle>

              <Card.Text>Netball goons</Card.Text>

              <ListGroup
                className="list-group-flush"
                style={{ padding: "5px" }}
              >
                <ListGroupItem>Upcoming Game: Monday 13th June</ListGroupItem>
                <ListGroupItem>Location: Eagles Stadium</ListGroupItem>
                <ListGroupItem>Time: 8:20PM</ListGroupItem>
              </ListGroup>

              <Button variant="primary">View Posts</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/100792069/original/9f1935674359575aaba25648b79f1ac9043501dc/sports-team-mascot-logo.jpg"
              }
            />
            <Card.Body>
              <Card.Title>Frequent Flyers</Card.Title>

              <Card.Subtitle className="mb-2 text-muted">Netball</Card.Subtitle>

              <Card.Text>Netball goons</Card.Text>

              <ListGroup
                className="list-group-flush"
                style={{ padding: "5px" }}
              >
                <ListGroupItem>Upcoming Game: Monday 13th June</ListGroupItem>
                <ListGroupItem>Location: Eagles Stadium</ListGroupItem>
                <ListGroupItem>Time: 8:20PM</ListGroupItem>
              </ListGroup>

              <Button variant="primary">View Posts</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                "https://placeit-assets0.s3-accelerate.amazonaws.com/custom-pages/sports-logo-v3/sports-logo-maker-for-a-baseball-team-with-baseball-clipart-172c.png"
              }
            />
            <Card.Body>
              <Card.Title>Frequent Flyers</Card.Title>

              <Card.Subtitle className="mb-2 text-muted">Netball</Card.Subtitle>

              <Card.Text>Netball goons</Card.Text>

              <ListGroup
                className="list-group-flush"
                style={{ padding: "5px" }}
              >
                <ListGroupItem>Upcoming Game: Monday 13th June</ListGroupItem>
                <ListGroupItem>Location: Eagles Stadium</ListGroupItem>
                <ListGroupItem>Time: 8:20PM</ListGroupItem>
              </ListGroup>

              <Button variant="primary">View Posts</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={
                "https://cms-assets.tutsplus.com/uploads/users/151/posts/32951/image/4-rugby-team-logo-generator-1616c.jpg"
              }
            />
            <Card.Body>
              <Card.Title>Frequent Flyers</Card.Title>

              <Card.Subtitle className="mb-2 text-muted">Netball</Card.Subtitle>

              <Card.Text>Netball goons</Card.Text>

              <ListGroup
                className="list-group-flush"
                style={{ padding: "5px" }}
              >
                <ListGroupItem>Upcoming Game: Monday 13th June</ListGroupItem>
                <ListGroupItem>Location: Eagles Stadium</ListGroupItem>
                <ListGroupItem>Time: 8:20PM</ListGroupItem>
              </ListGroup>

              <Button variant="primary">View Posts</Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </React.Fragment>
    );
  }
}
export default MyTeamsOld;
