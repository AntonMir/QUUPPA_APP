const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const config = require('config')
const router = Router()

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

            console.log('req.body:', req.body);
            const { name, email, question } = req.body

            // send question to tracking email 
            // config.get('trackingEmail')












            res.status(200).json({ message: 'Успешно' })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    },
)

module.exports = router
