import React, { useState, useEffect } from 'react'
// styled
import styled from 'styled-components'

// img
import A from '@img/tablet/A.png'
import B from '@img/tablet/B.png'
import C from '@img/tablet/C.png'
import D from '@img/tablet/D.png'
import E from '@img/tablet/E.png'
import F from '@img/tablet/F.png'
import G from '@img/tablet/G.png'
import H from '@img/tablet/H.png'
import I from '@img/tablet/I.png'
import J from '@img/tablet/J.png'
import K from '@img/tablet/K.png'
import L from '@img/tablet/L.png'
import M from '@img/tablet/M.png'
import N from '@img/tablet/N.png'
import O from '@img/tablet/O.png'
import P from '@img/tablet/P.png'
import Q from '@img/tablet/Q.png'
import R from '@img/tablet/R.png'
import S from '@img/tablet/S.png'
import T from '@img/tablet/T.png'
import U from '@img/tablet/U.png'
import V from '@img/tablet/V.png'
import W from '@img/tablet/W.png'
import X from '@img/tablet/X.png'
import Y from '@img/tablet/Y.png'
import Z from '@img/tablet/Z.png'
import Z1 from '@img/tablet/Z1.png'
import Z2 from '@img/tablet/Z2.png'
import Z3 from '@img/tablet/Z3.png'
import Z4 from '@img/tablet/Z4.png'
import Z5 from '@img/tablet/Z5.png'

const Tablet = () => {
    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        window.onscroll = () => {
            setScrollPos(window.pageYOffset)
        }
    }, [])

    const body = document.body
    const html = document.documentElement
    const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
    )

    // const chunk = height / 100 //1000px
    const chunk = height / 50 //2000px
    // const chunk = height / 40 //3000px
    // const chunk = height / 38 //5000px
    // const chunk = height / 33 //10000px

    const visible = {
        display: 'block',
    }

    const hidden = {
        display: 'none',
    }

    return (
        <TabletStyle>
            <Img style={scrollPos <= chunk * 1 ? visible : hidden} src={A} alt="" />
            <Img style={scrollPos > chunk * 1 && scrollPos <= chunk * 2 ? visible : hidden} src={B} alt="" />
            <Img style={scrollPos > chunk * 2 && scrollPos <= chunk * 3 ? visible : hidden} src={C} alt="" />
            <Img style={scrollPos > chunk * 3 && scrollPos <= chunk * 4 ? visible : hidden} src={D} alt="" />
            <Img style={scrollPos > chunk * 4 && scrollPos <= chunk * 5 ? visible : hidden} src={E} alt="" />
            <Img style={scrollPos > chunk * 5 && scrollPos <= chunk * 6 ? visible : hidden} src={F} alt="" />
            <Img style={scrollPos > chunk * 6 && scrollPos <= chunk * 7 ? visible : hidden} src={G} alt="" />
            <Img style={scrollPos > chunk * 7 && scrollPos <= chunk * 8 ? visible : hidden} src={H} alt="" />
            <Img style={scrollPos > chunk * 8 && scrollPos <= chunk * 9 ? visible : hidden} src={I} alt="" />
            <Img style={scrollPos > chunk * 9 && scrollPos <= chunk * 10 ? visible : hidden} src={J} alt="" />
            <Img style={scrollPos > chunk * 10 && scrollPos <= chunk * 11 ? visible : hidden} src={K} alt="" />
            <Img style={scrollPos > chunk * 11 && scrollPos <= chunk * 12 ? visible : hidden} src={L} alt="" />
            <Img style={scrollPos > chunk * 12 && scrollPos <= chunk * 13 ? visible : hidden} src={M} alt="" />
            <Img style={scrollPos > chunk * 13 && scrollPos <= chunk * 14 ? visible : hidden} src={N} alt="" />
            <Img style={scrollPos > chunk * 14 && scrollPos <= chunk * 15 ? visible : hidden} src={O} alt="" />
            <Img style={scrollPos > chunk * 15 && scrollPos <= chunk * 16 ? visible : hidden} src={P} alt="" />
            <Img style={scrollPos > chunk * 16 && scrollPos <= chunk * 17 ? visible : hidden} src={Q} alt="" />
            <Img style={scrollPos > chunk * 17 && scrollPos <= chunk * 18 ? visible : hidden} src={R} alt="" />
            <Img style={scrollPos > chunk * 18 && scrollPos <= chunk * 19 ? visible : hidden} src={S} alt="" />
            <Img style={scrollPos > chunk * 19 && scrollPos <= chunk * 20 ? visible : hidden} src={T} alt="" />
            <Img style={scrollPos > chunk * 20 && scrollPos <= chunk * 21 ? visible : hidden} src={U} alt="" />
            <Img style={scrollPos > chunk * 21 && scrollPos <= chunk * 22 ? visible : hidden} src={V} alt="" />
            <Img style={scrollPos > chunk * 22 && scrollPos <= chunk * 23 ? visible : hidden} src={W} alt="" />
            <Img style={scrollPos > chunk * 23 && scrollPos <= chunk * 24 ? visible : hidden} src={X} alt="" />
            <Img style={scrollPos > chunk * 24 && scrollPos <= chunk * 25 ? visible : hidden} src={Y} alt="" />
            <Img style={scrollPos > chunk * 25 && scrollPos <= chunk * 26 ? visible : hidden} src={Z} alt="" />
            <Img style={scrollPos > chunk * 26 && scrollPos <= chunk * 27 ? visible : hidden} src={Z1} alt="" />
            <Img style={scrollPos > chunk * 27 && scrollPos <= chunk * 28 ? visible : hidden} src={Z2} alt="" />
            <Img style={scrollPos > chunk * 28 && scrollPos <= chunk * 29 ? visible : hidden} src={Z3} alt="" />
            <Img style={scrollPos > chunk * 29 && scrollPos <= chunk * 30 ? visible : hidden} src={Z4} alt="" />
            <Img style={scrollPos > chunk * 30 && scrollPos <= chunk * 31 ? visible : hidden} src={Z5} alt="" />
            <Img style={scrollPos > chunk * 31 ? visible : hidden} src={Z5} alt="" />
        </TabletStyle>
    )
}

const TabletStyle = styled.div`
    position: fixed;
    left: calc(50% - 10vw);
    width: 20vw;
    opacity: 0.3;
    z-index: -999;
`

const Img = styled.img`
    width: 100%;
    height: auto;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`
// const Img = styled(LottieAnim)`
//     position: fixed;
//     left: 0%;
//     top: 0%;
//     right: auto;
//     bottom: 0%;
//     width: 22vw;
//     -webkit-align-self: center;
//     -ms-flex-item-align: center;
//     -ms-grid-row-align: center;
//     align-self: center;
//     -webkit-box-flex: 1;
//     -webkit-flex: 1;
//     -ms-flex: 1;
//     flex: 1;
// `

export default Tablet
