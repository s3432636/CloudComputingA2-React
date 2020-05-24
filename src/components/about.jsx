import React, {Component} from "react";
import {Container} from "react-bootstrap";
import logo from "./../logo.svg";
import "./../css/App.css";

class About extends Component {

    render() {
        return (
            <div className="about">
                <Container>
                    <h3>About</h3>
                    <p>Playerly is web-based application allowing a community to connect and play in
                        a local sports team, or within a fitness or exercise group. Playerly aims to
                        connect teams and groups with players and individuals within the local area.
                        Players can set up their profile according to their individual circumstances and
                        once they are added to a team or group, they are able to see the latest updates,
                        including game time, location, payment and more information regarding this team.</p>
                    <p> This app has been deployed to AWS and Gcloud as part of the Cloud Computing Semester 2, 2020 Course.</p>
                </Container>
            </div>
        );
    }
}
export default About;
