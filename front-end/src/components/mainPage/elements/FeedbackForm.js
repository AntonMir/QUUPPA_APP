import React, { useState, useEffect } from 'react'
// castom hook
import { useHttp } from '@hooks/http.hook.js'
import { useMessage } from '@hooks/message.hook.js'
// config
import config from '@config/config.js'
// styled
import styled from 'styled-components'

export default function FeedbackForm() {
    // кастомный хук для вывоа ошибки
    const message = useMessage()

    // how many seconds need wait
    const waitingInterval = 10

    // кастомный хук для отправки данных
    const { error, request, clearError } = useHttp()

    // state для name, email и question
    // prohibition - запрет
    const [form, setForm] = useState({ name: '', email: '', question: '' })
    const [prohibitionSending, setProhibitionSending] = useState(false)
    const [counter, setCounter] = useState(10)

    // обработаем ошибку
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    // заводим счетчик
    useEffect(() => {
        let timer
        if (prohibitionSending && counter >= 0) {
            timer = setTimeout(() => setCounter((counter) => counter - 1), 1000)
        }
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [prohibitionSending, counter])

    // сохраняем в наш state name, email и question
    const changeUserData = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    // возвращаем доступ к отправке данных и откатываем счетчик обратно до "10"
    const accessSending = () => {
        setProhibitionSending(false)
        setCounter(10)
    }

    // вызывает хук useHttp, отправляет запрос на сервер,
    // получает ответ в виде промиса и выводит его на экран
    const sendQuestion = async () => {
        try {
            const data = await request(`${config.PostServerURL}`, 'POST', { ...form })
            // очищаем форму
            setForm({ name: '', email: '', question: '' })
            // выводим ответ от сервера
            message(data.message)
            // после отправки запрещаем на время повторную отправку
            setProhibitionSending(true)
            setTimeout(() => {
                accessSending()
            }, waitingInterval * 1000)
        } catch (error) {
            console.log('---', 'sendQuestionERROR', error.message)
        }
    }

    console.log('---', 'RENDERED')

    return (
        <FeedbackFormStyled>
            <H1>Форма для связи</H1>
            <Input
                placeholder="Имя"
                id="feedback-name"
                type="text"
                name="name"
                value={form.name}
                onChange={changeUserData}
            />
            <Input
                placeholder="Email"
                id="feedback-email"
                type="text"
                name="email"
                value={form.email}
                onChange={changeUserData}
            />
            <Question
                placeholder="Question"
                id="feedback-question"
                type="text"
                name="question"
                autoComplete="off"
                value={form.question}
                onChange={changeUserData}
            />
            <Button onClick={sendQuestion} disabled={prohibitionSending}>
                Отправить
            </Button>
            <p style={{ opacity: `${prohibitionSending ? '1' : '0'}` }}>
                Повторная отправка будет доступна через {counter} секунд
            </p>
        </FeedbackFormStyled>
    )
}

const FeedbackFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 40px;
`

const H1 = styled.h1`
    font-size: calc(2vw + 25px);
    color: #000;
    margin: 60px 0 50px;
`

const Input = styled.input`
    margin-bottom: 30px !important;
    background-color: #fff !important;
    color: #000;
    max-width: 60%;
    padding: 0 20px !important;
    opacity: 0.8;
    border: 1px solid #000 !important;
    &:focus {
        border: 1px solid #00b0d2 !important;
        box-shadow: none !important;
    }

    @media (max-width: 1024px) {
        max-width: 84%;
    }
`

const Question = styled.textarea`
    margin-bottom: 30px !important;
    background-color: #fff !important;
    padding: 20px;
    color: #000;
    height: 150px;
    max-width: calc(60% + 40px);
    min-width: 30%;
    opacity: 0.8;
    border: 1px solid #000 !important;
    &:focus-visible {
        border: 1px solid #00b0d2 !important;
        box-shadow: none !important;
        outline: none !important;
    }

    @media (max-width: 1024px) {
        max-width: calc(84% + 40px);
    }
`

const Button = styled.button`
    padding: 5px 25px 10px;
    margin: 15px 0 0 0;
    font-size: 20px;
    color: #fff;
    background-color: #091f2c;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    &:focus {
        background-color: rgba(00, 00, 00, 0) !important;
    }
    &:disabled {
        opacity: 0.5;
    }
`
