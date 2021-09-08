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
                    <CustomLink to="/">Умное страхование</CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/">О нас</CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/">Форма для связи</CustomLink>
                </NavEl>
            </NavList>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1;
    margin: 0 20px;

    @media (max-width: 991px) {
        margin-top: 80px;
        flex: 0;
    }
`

const NavList = styled.ul`
    justify-self: center;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 991px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const NavEl = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0 10px;
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

    @media (max-width: 991px) {
        margin: 0;
        height: 40px;

        &:before,
        &:after {
            display: none;
        }
    }
`

const CustomLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 991px) {
        color: #000;
    }
`
