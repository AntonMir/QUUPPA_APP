// Link
import { Link } from 'react-router-dom'
// styles
// import './nav.scss';
import styled from 'styled-components'

export default function Nav() {
    return (
        <NavStyled>
            <NavList>
                <div>
                    <NavEl className="header-nav-el">
                        <CustomLink to="/">Products</CustomLink>
                    </NavEl>
                </div>
                <div>
                    <NavEl className="header-nav-el">
                        <CustomLink to="/">Industries</CustomLink>
                    </NavEl>
                </div>
                <div>
                    <NavEl className="header-nav-el">
                        <CustomLink to="/">Company</CustomLink>
                    </NavEl>
                </div>
                <div>
                    <NavEl className="header-nav-el">
                        <CustomLink to="/">Resources</CustomLink>
                    </NavEl>
                </div>
                <div>
                    <NavEl className="header-nav-el">
                        <CustomLink to="/">Connected Magazine</CustomLink>
                    </NavEl>
                </div>
            </NavList>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1;
    margin: 0 20px;
`

const NavList = styled.ul`
    justify-self: center;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`

const NavEl = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 20px;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    height: 80px;

    &:before,
    &:after {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        border-bottom: 7px solid #091f2c;
        content: '';
        transition: all 0.3s ease;
    }
    &:hover {
        &:before,
        &:after {
            width: 60%;
            border-bottom: 7px solid #00b5d6;
        }
        &:after {
            transform: translateX(-98%);
        }
    }
`

const CustomLink = styled(Link)`
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`
