import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Team from "./teamcard";

class Teams extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row style={{ padding: "20px" }}>
            <Col style={{ padding: "20px" }}>
              <Team></Team>
            </Col>

            <Col style={{ padding: "20px" }}></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default Teams;
