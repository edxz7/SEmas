import { Container, Nav } from "../Dashboard/Dashboard-Styled-Components";
import Dropdown from "react-dropdown";
import React from 'react';

function Navbar(props) {
    return (
        <>
            {/* static navbar - top */}
            <Nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
                <Container className="navbar-brand h1 mb-0 text-large font-medium">
                    Crece +
                </Container>
                <Container className="navbar-nav ml-auto">
                    <Container className="user-detail-section">
                        <span className="pr-2">Hi, Sean</span>
                        <span className="img-container">
                            {/* <img src={UserImg} className="rounded-circle" alt="user" /> */}
                        </span>
                    </Container>
                </Container>
            </Nav>
            {/* static navbar - bottom */}
            <Nav className="navbar fixed-top nav-secondary is-dark is-light-text">
                <Container className="text-medium">Menu</Container>
                <Container className="navbar-nav ml-auto">
                    <Dropdown
                        className="pr-2 custom-dropdown"
                        options={props.options}
                        onChange={props.onChange}
                        value={props.value}
                        placeholder="Select an option"
                    />
                </Container>
            </Nav>
        </>
    );
}

export default Navbar;
