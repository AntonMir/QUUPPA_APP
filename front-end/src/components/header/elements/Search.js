// img
import search from '@img/header/search.svg'
// styles
import styled from 'styled-components'

export default function Search() {
    return (
        <SearchStyled>
            <Img src={search} alt="" />
        </SearchStyled>
    )
}

const SearchStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 5.5%;
    margin-right: 1%;
    cursor: pointer;
`

const Img = styled.img`
    width: 30px;
    height: 30px;
`
