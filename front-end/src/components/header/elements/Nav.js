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
                    <CustomLink to="/">Главная</CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/">Статистика</CustomLink>
                </NavEl>
                <NavEl className="header-nav-el">
                    <CustomLink to="/">Карты</CustomLink>
                </NavEl>
                {/* <NavEl className="header-nav-el">
                    <Link to="/">Финансовый календарь</Link>
                </NavEl> */}
            </NavList>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin: 0 30px;
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
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    &:before,
    &:after {
        position: absolute;
        bottom: -1px;
        left: 50%;
        width: 0;
        border-bottom: 3px solid #091f2c;
        content: '';
        transition: all 0.3s ease;
    }
    &:hover {
        &:before,
        &:after {
            width: 50%;
            border-bottom: 3px solid #00b5d6;
        }
        &:after {
            transform: translateX(-98%);
        }
    }
`
