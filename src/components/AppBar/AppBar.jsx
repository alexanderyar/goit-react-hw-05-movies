import { Header, Nav, NavItem } from "./AppBar.styled"


// later need to  add basic styles for inner elements
export const AppBar = () => {
    return (
        <Header>
            <Nav>
                <NavItem to="/">HomeLink</NavItem>
                <NavItem to="movies">Movies</NavItem>
            </Nav>
        </Header>
    )
}