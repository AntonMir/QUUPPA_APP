// Link
// import { Link } from 'react-router-dom'
// redux
import { store } from '@store/store.js'
import { changeLanguage } from '@store/actions.js'
// img
import languageSvg from '@img/header/language.svg'
import arrowDown from '@img/header/arrow-down.svg'
// styled
import styled from 'styled-components'

const changeLanguageToRU = () => {
    store.dispatch(changeLanguage('RU'))
}

const changeLanguageToEN = () => {
    store.dispatch(changeLanguage('EN'))
}

export default function LanguageChanger() {
    return (
        <LanguageMenu>
            <CurrentLangWrapper to="/auth">
                <LangImg src={languageSvg} alt="globus" />
                <CurrentLang>{store.getState().pageLanguage}</CurrentLang>
                <ArrowImg src={arrowDown} alt="arrowDown" />
            </CurrentLangWrapper>
            <AvailableLangList>
                <AvaalibleLang onClick={changeLanguageToRU}>RU</AvaalibleLang>
                <AvaalibleLang onClick={changeLanguageToEN}>EN</AvaalibleLang>
            </AvailableLangList>
        </LanguageMenu>
    )
}

const LanguageMenu = styled.div``

const CurrentLangWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0;
    cursor: pointer;

    & + ul {
        opacity: 0;
        top: -100%;
        z-index: -1000;
    }

    &:hover {
        & + ul {
            opacity: 1;
            top: 10%;
            z-index: 1000;
        }
    }
`

const CurrentLang = styled.div`
    padding: 5px 5px;
    margin: 0;
    color: #000;
    user-select: none;
    white-space: nowrap;
    z-index: 999;
    font-size: 13px;
`

const LangImg = styled.img`
    width: 16px;
    height: auto;
`

const ArrowImg = styled.img`
    width: 10px;
    height: auto;
`

const AvailableLangList = styled.ul`
    position: absolute;
    background-color: #fff;
    transition: all 0.5s ease;
    z-index: 0;

    &:hover {
        opacity: 1;
        top: 10%;
        z-index: 1000;
    }
`

const AvaalibleLang = styled.li`
    padding: 3px 23px;
    border-top: 3px solid #00b5d6;
    color: #aaa;
    cursor: pointer;
    user-select: none;
    transition: all 0.5s ease;

    &:hover {
        color: #000;
    }
`
