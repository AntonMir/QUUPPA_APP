// Link
import { Link } from 'react-router-dom'
// styles
// import './nav.scss';
import styled from 'styled-components'

export default function Nav() {
    return (
        <NavStyled>
            <Ul>
                <Li className="header-nav-el">
                    <CustomLink to="/">Служба поддержки</CustomLink>
                </Li>
                <Li className="header-nav-el">
                    <CustomLink to="/">Карьера</CustomLink>
                </Li>
            </Ul>
        </NavStyled>
    )
}

const NavStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    margin: 0 10px;
`

const Ul = styled.ul`
    display: flex;
    justify-self: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const Li = styled.li`
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
