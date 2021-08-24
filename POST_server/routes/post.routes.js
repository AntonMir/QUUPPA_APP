const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const config = require('config')
const router = Router()

const sendEmail = require('@mailers/post.mailer.js')


router.post(
    '/',
    [
        check('email', 'Некорректный email').isEmail(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный email',
                })
            }
            console.log('------------- REQ BODY ---------------');
            console.log(req.body);
            console.log('--------------------------------------');

            sendEmail(config.get('emailReceiver'), req.body)

            res.status(200).json({ message: 'Успешно' }) 
            // 'В ближайшее время мы с Вами свяжемся и ответим на все вопросы'
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    },
)

module.exports = router
