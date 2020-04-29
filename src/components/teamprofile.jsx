import React, {Component} from "react";
import {
    Card,
    Container,
    Table,
    Row,
    Col,
    Jumbotron,
    Image
} from "react-bootstrap";
import "./../css/App.css";
import logo from "./../logo.svg";
import CompactTeam from "./compactteamcard";
import GameCard from "./gamecard";
import ProfileHeader from "./profileheader";


class TeamProfile extends Component {
  render() {
    return (
        <div>
            <ProfileHeader />
            <Container>
                <h4>Upcoming Games</h4>
                <Row>
                    <Col style={{ padding: "20px" }}>
                        <GameCard />
                    </Col>
                </Row>
            </Container>
            <Container>
                <h4>The Team</h4>
                {/* Placeholder Table */}
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                        <td>F. Name<b> L. Name</b></td>
                        <td>F. Name<b> L. Name</b></td>
                        <td>F. Name<b> L. Name</b></td>
                    </tr>
                    <tr>
                        <td>F. Name<b> L. Name</b></td>
                        <td>F. Name<b> L. Name</b></td>
                        <td>F. Name<b> L. Name</b></td>
                    </tr>
                    <tr>
                        <td>F. Name<b> L. Name</b></td>
                        <td>F. Name<b> L. Name</b></td>
                        <td>F. Name<b> L. Name</b></td>
                    </tr>
                  </tbody>
                </Table>            
            </Container>
        </div>
    )
  }
}
export default TeamProfile;