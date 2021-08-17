// Link
import { Link } from 'react-router-dom'
// styles
import styled from 'styled-components'

export default function RequestDemo() {
    return (
        <ReqStyled>
            <CustomLink to="/">Request a Demo</CustomLink>
        </ReqStyled>
    )
}

const ReqStyled = styled.li`
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
    color: #00b5d6;
    font-weight: bold;
    cursor: pointer;
`
