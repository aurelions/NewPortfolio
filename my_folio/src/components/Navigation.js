import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';





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
       <div className="icons">
                <SocialIcon url="https://twitter.com/kenzo_dev" target="_blank"/>
                <SocialIcon/>     
       </div>
    </Navbar>
     
    </div>
    
)

}
