// Link
import { Link } from 'react-router-dom'
// styles
// import './nav.scss';
import styled from 'styled-components'

export default function Nav() {
    return (
        <NavStyled>
            <NavList>
                <NavEl className="header-nav-el">
                    <CustomLink to="/">Customer Support</CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/">Contuct Us</CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/">Careers</CustomLink>
                </NavEl>
            </NavList>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin: 0 10px;
`

const NavList = styled.ul`
    justify-self: center;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`

const NavEl = styled.li`
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
`

const CustomLink = styled(Link)`
    position: relative;
    color: #000;
    cursor: pointer;
`
