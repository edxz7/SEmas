import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { MainNavbarStyle } from './MainNavbarStyles';
import { SecondaryButton } from '../Button/Buttons'
import { ObserverContext } from '../../contexts/ObserverContext';
import { MyContext } from '../../contexts/context';
import { withRouter} from 'react-router-dom';

const MainNavbar = (props) => {
    const ocontext = useContext(ObserverContext);
    const context = useContext(MyContext);
    const isCrossed = ocontext.isCrossed;
    return(
        <MainNavbarStyle   >
            <Navbar collapseOnSelect expand="lg" bg={ isCrossed ? "color": "color-scrolled"}  variant={isCrossed ? "dark": "light"}>
            <Navbar.Brand className='links' style={{fontSize:'2rem'}} href="/">SE+</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav activeKey="1" className="ml-auto" >
                {context.loggedUser ? 
                    <Nav.Link eventKey={2} onClick={e => {
                        console.log(props)
                                    e.preventDefault()
                                    context.handleLogout(() => {
                                        props.history.push('/');
                                    });
                                }} href="">
                        <SecondaryButton >Salir</SecondaryButton> 
                    </Nav.Link>
                : 
                <>
                    <Nav.Link className='links' href="/signup" >Registrate</Nav.Link>
                    <Nav.Link eventKey={3} href="/login">
                        <SecondaryButton>Ingresa</SecondaryButton> 
                    </Nav.Link>
                </>
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </MainNavbarStyle>
    )
}

export default withRouter(MainNavbar);