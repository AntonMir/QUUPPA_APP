// redux
import { store } from '@store/store.js'
import { changeLanguage } from '@store/actions.js'
// styled
import styled from 'styled-components'

export default function AvalibleLang(props) {
    const { lang } = props

    const changeLanguageHandler = () => {
        store.dispatch(changeLanguage(lang))
    }

    return <Lang onClick={changeLanguageHandler}>{lang}</Lang>
}

const Lang = styled.li`
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
