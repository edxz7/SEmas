import { Container, Nav } from "../Dashboard/Dashboard-Styled-Components";
import Dropdown from "react-dropdown";
import React from 'react';
import { MyContext } from "../../context";
import { OptionLink } from './Navbar.Styles'
function Navbar(props) {
    return (
        <>
            {/* static navbar - top */}
            <MyContext.Consumer>
                {context => (
                    <Nav className="mynav navbar navbar-expand-lg fixed-top is-white is-dark-text">
                        <Container className="navbar-brand h1 mb-0 text-large font-medium">
                            Crece +
                         </Container>
                        <Container className="navbar-nav ml-auto">
                            <OptionLink as='div'>
                                <span className="pr-2">Hi, {context.state.user.username} {context.state.user.userLastName} {context.state.user.userLastName}</span>
                                <span className="img-container">
                                    {/* <img src={UserImg} className="rounded-circle" alt="user" /> */}
                                </span>
                            </OptionLink>
                            <Container className="user-detail-section">

                            </Container>
                            <Container className="user-detail-section">
                                <OptionLink as='div' onClick={e => {
                                    e.preventDefault()
                                    context.handleLogout(() => {
                                        props.history.push("/");
                                    });
                                }}>
                                    SIGN OUT
                        </OptionLink>
                            </Container>
                        </Container>
                    </Nav>
                )}
            </MyContext.Consumer>
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
