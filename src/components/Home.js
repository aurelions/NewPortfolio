import React from 'react';
import styled from 'styled-components':




function Navigation(){

const NavigationDiv = styled.div`
    width: 100%;
    height: 35px;
    color: green;
`
const LogoDiv = styled.div`
    
`
const Logo = styled.img`

`
const MenuDiv = styled.div`

`
const Home = styled.p`

`
const Projects = styled.p`

`
const About = styled.p`

`
return(

        <NavigationDiv>
            <LogoDiv>
                <Logo></Logo>
            </LogoDiv>
            <MenuDiv>
                <Home/>
                <Projects/>
                <About/>
            </MenuDiv>
        </NavigationDiv>


)

}
export default Navigation;