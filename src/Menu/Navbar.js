import React from 'react';
import {FaBars} from 'react-icons/fa'
import * as Icon from 'react-feather'
import {Nav, NavbarContainer, NavLogo,ImgLogo, MobileIcon, NavMenu, NavItems,NavLinks, NavBtn, NavBtnLink, NavBtnLinkL} from './NavBarStyled'

const Navbar = ({toggle}) => {

    // const onMouseEnter = () =>{
    //     if(window.innerWidth < 769){
    //       setIsActive(false)
    //     }
    
    //     setIsActive(true)
    //   }
    
      
    //   const onMouseLeave = () =>{
    //     if(window.innerWidth < 769){
    //       setIsActive(false)
    //     }
    
    //     setIsActive(false)
    //   }
    
    return (
        <>
       <Nav>
        <NavbarContainer>
                <NavLogo to="/">
                  <ImgLogo src="/logo-finder.png"  alt="logo" />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItems>
                      <NavLinks to="/">About</NavLinks>
                      <NavLinks to="/">Services </NavLinks>
                      <NavLinks to="/">POST A JOB </NavLinks>
                      <NavLinks to="/">Contact Us</NavLinks>
                  </NavItems>
                </NavMenu>
                <NavBtn>
                    <NavBtnLinkL to="/login"><Icon.LogIn size={13}/> Login</NavBtnLinkL>
                    <NavBtnLink to='/signup'><Icon.UserPlus size={13}/> Sign Up</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
           
        </Nav> 
        </>
    )
}

export default Navbar
