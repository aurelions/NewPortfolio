import React from 'react';
import styled from 'styled-components';




function Navigation(){

const NavigationDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const LogoDiv = styled.div`
    width: 25%;
`
const Logo = styled.img`
    width: 20%;
`
const MenuDiv = styled.nav`
    display: flex;
    justify-content: flex-end;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 45%;

`
const Home = styled.a`
    
   
`
const Projects = styled.a`

`
const About = styled.a`

`   
return(

        <NavigationDiv>
            <LogoDiv>
                <Logo src='./assets/lynx-cat.jpg'/>
            </LogoDiv>
            <MenuDiv>
                <div>
                    <Home>Home</Home>
                </div>
                <div>
                    <Projects>Projects</Projects>
                </div>
                <div>
                    <About>About</About>
                </div>
            </MenuDiv>
        </NavigationDiv>


)

}
export default Navigation;