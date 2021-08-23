import React, { useState, useEffect, useContext } from 'react'
// castom hook
import { useHttp } from '@hooks/http.hook.js'
import { useMessage } from '@hooks/message.hook.js'
// context
import { AuthContext } from '@src/context/AuthContext.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function FeedbackForm() {

        // кастомный хук для вывоа ошибки
        const message = useMessage()

        // кастомный хук для отправки данных
        const { loading, error, request, clearError } = useHttp()

        // state для name, email и question
        const [form, setForm] = useState({ name: '', email: '', question: '' })

        // обработаем ошибку
        useEffect(() => {
            message(error)
            clearError()
        }, [error, message, clearError])

        // сохраняем в наш state name, email и question
        const changeUserData = (event) => {
            setForm({ ...form, [event.target.name]: event.target.value })
        }

        
        // вызывает хук useHttp, отправляет запрос на сервер,
        // получает ответ в виде промиса и выводит его на экран
        const sendQuestion = async () => {
            try {
                const data = await request(`${config.EmailServerURL}`, 'POST', { ...form })
                message(data)
            } catch (error) {
                console.log('---', 'sendQuestionERROR', error);
            }
        }


    return (
        <FeedbackFormWrapper>
            <FeedbackFormStyled>
                <H1>Форма для связи</H1>
                <p>{config.EmailServerURL}</p>
                <Input 
                    placeholder="Имя" 
                    id="feedback-name" 
                    type="text" 
                    name="name" 
                    onChange={changeUserData} 
                />
                <Input 
                    placeholder="Email" 
                    id="feedback-email" 
                    type="text" 
                    name="email" 
                    onChange={changeUserData} />
                <Question
                    placeholder="Question"
                    id="feedback-question"
                    type="text"
                    name="question"
                    autoComplete="off"
                    onChange={changeUserData}
                />
                <Button onClick={sendQuestion} disabled={loading}>
                    Отправить 
                </Button>
            </FeedbackFormStyled>
        </FeedbackFormWrapper>
    )
}

const FeedbackFormWrapper = styled.div`
    background-color: rgba(0, 120, 160, 0.8);
`

const FeedbackFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 0 70px;
`

const H1 = styled.h1`
    font-size: 45px;
    color: #fff;
`

const Input = styled.input`
    margin-bottom: 30px !important;
    background-color: #fff !important;
    padding: 0 20px !important;
    color: #000;
    max-width: 70%;
    opacity: 0.8;
    &:focus {
        border-bottom: 1px solid #00b0d2 !important;
        box-shadow: 0px 1px 0 0 #00b0d2 !important;
    }
`

const Question = styled.textarea`
    margin-bottom: 30px !important;
    background-color: #fff !important;
    padding: 20px !important;
    color: #000;
    height: 150px;
    max-width: 73%;
    min-width: 30%;
    opacity: 0.8;
    &:focus {
        border-bottom: 1px solid #00b0d2 !important;
        box-shadow: 0px 1px 0 0 #00b0d2 !important;
    }
`

const Button = styled.button`
    padding: 5px 25px 10px;
    margin: 15px 0 0 0;
    font-size: 20px;
    color: #fff;
    background-color: #091F2C;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    &:focus {
        background-color: rgba(00, 00, 00, 0) !important;
    }
`
