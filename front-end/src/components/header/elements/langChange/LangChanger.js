import { useState } from 'react'
// redux
import { store } from '@store/store.js'
// components
import AvalibleLang from '@header/elements/langChange/elements/AvaalibleLang.js'
// img
import languageSvg from '@img/header/language.svg'
import languageSvgWhite from '@img/header/language-white.svg'
import arrowDown from '@img/header/arrow-down.svg'
import arrowDownWhite from '@img/header/arrow-down-white.svg'
// styled
import styled from 'styled-components'

const AvaalibleLangList = ['EN', 'RU']

export default function LanguageChanger() {
    const [currentLang, setCurrentLang] = useState('RU')
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)

    store.subscribe(() => {
        setCurrentLang(store.getState().pageLanguage)
        setBurgerMenuIsOpen(store.getState().burgerMenuIsOpen)
    })

    return (
        <LangChangeWrapper
            onClick={(event) => {
                event.stopPropagation()
            }}
        >
            <CurrentLangWrapper to="/auth">
                <LangImg src={burgerMenuIsOpen ? languageSvg : languageSvgWhite} alt="globus" />
                <CurrentLang>{currentLang}</CurrentLang>
                <ArrowImg src={burgerMenuIsOpen ? arrowDown : arrowDownWhite} alt="arrowDown" />
            </CurrentLangWrapper>
            <AvailableLangList>
                {AvaalibleLangList.map((lang) => {
                    if (currentLang !== lang) {
                        return <AvalibleLang lang={lang} key={lang} />
                    }
                    return []
                })}
            </AvailableLangList>
        </LangChangeWrapper>
    )
}

const LangChangeWrapper = styled.div`
    position: relative;
`
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
            top: 40%;
            z-index: 1000;
        }
    }
`
const CurrentLang = styled.div`
    padding: 5px 5px;
    margin: 0;
    color: #fff;
    user-select: none;
    white-space: nowrap;
    z-index: 999;
    font-size: 13px;

    @media (max-width: 991px) {
        color: #000;
    }
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
        top: 40%;
        z-index: 1000;
    }
`
