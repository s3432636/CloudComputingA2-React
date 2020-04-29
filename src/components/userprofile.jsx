import React, {Component} from "react";
import {
    Card,
    Container,
    Row,
    Col,
    Jumbotron,
    Image
} from "react-bootstrap";
import "./../css/App.css";
import logo from "./../logo.svg";
import CompactTeam from "./compactteamcard";
import ProfileHeader from "./profileheader";


class UserProfile extends Component {
  render() {
    return (
        <div>
            <ProfileHeader />
            <Container>
                <h4>My Teams</h4>
                <Row>
                    <Col style={{ padding: "20px" }}>
                        <CompactTeam />
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
export default UserProfile;