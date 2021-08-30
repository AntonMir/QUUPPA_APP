import React, { useState, useEffect } from 'react'
// styled
import styled from 'styled-components'


// Динамический импорт всех png картинок из папки
const importAll = (r) => {
    return r.keys().map(r);
};
const allTabletImg = importAll(
    require.context("@img/tablet", false, /\.png$/)
)   


const Tablet = () => {

    // позиция вьюпорта
    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        window.onscroll = () => {
            // обновляем позицию вьюпорта при прокрутке
            setScrollPos(window.pageYOffset)
        }
        return () => {
            window.onscroll = () => {
                // убираем слушатель, если уходим с главной страницы
                return null
            }
        }
    })

    // высчитываем высоту документа
    const body = document.body
    const html = document.documentElement
    const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
    )
    
    // Параметр, зависящий от конечной высоты документа
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
            {/* отрисуем каждую картинку */}
            {allTabletImg.map(el => {
                // если картинка последняя не скрываем ее
                if(scrollPos >= chunk * allTabletImg.length) {
                    return (
                        <Img 
                            src={allTabletImg[allTabletImg.length - 1].default}
                            alt="tablet.png" 
                            key={allTabletImg.indexOf(el)} 
                        />
                    )
                }
                // в зависимости от положения отрисовываем соответствующую картинку
                return (
                    <Img 
                        style={scrollPos >= chunk * allTabletImg.indexOf(el) && scrollPos < chunk * (allTabletImg.indexOf(el) + 1) ? visible : hidden} 
                        src={el.default}
                        alt="tablet.png" 
                        key={allTabletImg.indexOf(el)} 
                    />
                )
            })}
        </TabletStyle>
    )
}

const TabletStyle = styled.div`
    position: fixed;
    left: calc(50% - 630px);
    top: 20%;
    width: calc(10vw + 200px);
    opacity: 0.25;
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

export default Tablet
