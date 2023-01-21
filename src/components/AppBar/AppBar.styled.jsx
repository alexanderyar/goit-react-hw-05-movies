import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Header = styled.header`
border-bottom: 3px solid black;
`

export const Nav = styled.nav`
display:flex;
justify-content: start;
`

export const NavItem = styled(NavLink)`
display:block;
margin-right:20px;
text-decoration:none;
color: tomato;
padding-left:5px;
padding-right:5px;


&.active {
    background-color: black;
    color: white;
    border-radius: 10%;
}

:hover:not(.active),
:focus-visible:not(.active) {
    color: blue;
}
`