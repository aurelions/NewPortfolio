import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container} from 'react-bootstrap'



export default function Navigation(){


return(
    
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
            <Nav className="justify-content-center">
                <NavLink to="/" exact>
                    Conary
                </NavLink>
                <NavLink to="about">
                    About
                </NavLink>
                <NavLink to="contact">
                    Contact
                </NavLink>
            
            </Nav>
        </Container>
    </Navbar>
    
)

}
