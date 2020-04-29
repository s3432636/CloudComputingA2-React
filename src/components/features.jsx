import React, {Component} from "react";
import {Container} from "react-bootstrap";
import logo from "./../logo.svg";
import "./../css/App.css";

class Features extends Component {

    render() {
        return (
            <div className="features">
                <Container>
                    <h3>Features</h3>
                    <p>The front-end of Playerly has been developed in React, React is a popular and
                        versatile front end library, which is used in many popular apps such as Facebook
                        and Netflix. Ruby on Rails has been used to develop our backend, this is a
                        server-side framework, which has a quick set up, allowing us to begin
                        development sooner.
                    </p>
                    <p>A key feature of this app includes the ability to search and look at
                        suggestions for new players and teams based on the chosen sport, location, or
                        skill level. This will ensure teams will have players who are similar to their
                        current members. Another key feature is viewing each of your teams on a
                        dashboard. This dashboard will allow users to easily see which events are coming
                        up, including the time and location. Teams will also be able to post on a
                        discussion board, to keep users up to date on upcoming games and any other
                        important information. Another key feature is admin privileges, these are
                        important to allow some level of self-moderation for teams. Each team appoints a
                        captain/coach, who are responsible for receiving, accepting, or declining
                        requests, as well as ensuring their group remains appropriate and inoffensive.
                    </p>

                </Container>
            </div>
        );
    }
}
export default Features;
