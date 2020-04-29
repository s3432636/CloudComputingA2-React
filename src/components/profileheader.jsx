import React, {Component} from "react";
import {
    Row,
    Col,
    Jumbotron,
    Image
} from "react-bootstrap";
import "./../css/App.css";
import logo from "./../logo.svg";
import { connect } from "react-redux";

class ProfileHeader extends Component {
  render() {
    return (
        <div>
            <Jumbotron className="profileHeader">
                <Row>
                    <Col xs={6} md={4} align="center">
                        <Image src={logo} className="profileImage" alt="profile image" roundedCircle />  
                    </Col>
                    <Col xs={12} md={8}>
                        <h4>{this.props.user}</h4>
                        <h5>{this.props.email}</h5>
                        <h6>Melbourne</h6>
                        <p/>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
  }
}

function mapStateToProps(state) {
    console.log(state);
    return {
      user: state.user.username,
      email: state.user.email
    };
  }

export default connect(
  mapStateToProps
)(ProfileHeader);