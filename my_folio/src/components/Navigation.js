import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'





export default function Navigation(){


return(
    <div className="navbox"  >
    
    <Navbar fluid className="sidebar" inverse>
            <Nav id="nav" className="justify-content-center">
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
       
    </Navbar>
    </div>
    
)

}
