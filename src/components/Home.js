import React from 'react';
import styled from 'styled-components';




function Navigation(){

const NavigationDiv = styled.div`
    display: flex;
    width: 100%;
    color: green;
`
const LogoDiv = styled.div`
    width: 25%;
`
const Logo = styled.img`
    width: 20%;
`
const MenuDiv = styled.nav`
    display: flex;
    justify-content: space-around;
    justify-content: flex-end;
    width: 75%;

`
const Home = styled.a`

`
const Projects = styled.a`

`
const About = styled.a`

`
const navTH = {
    text: 'Home',
    //put href here***

}
return(

        <NavigationDiv>
            <LogoDiv>
            <Logo src='./assets/lynx-cat.jpg'/>
            </LogoDiv>
            <MenuDiv>
                <Home text={navTH}/>
                <Projects>Projects</Projects>
                <About>About</About>
            </MenuDiv>
        </NavigationDiv>


)

}
export default Navigation;