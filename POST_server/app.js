const express = require('express')
const config = require('config')
const chalk = require('chalk')
var cors = require('cors')
require('module-alias/register')

const app = express()

const port = process.env.PORT || config.get('port') || 7000

app.use(cors(config.get('corsOptions')))

app.use(express.json({ extended: true }))

app.use(require('@routes/post.routes.js'))

app.listen(port, () => {
    console.log(chalk.magenta(`>>> POST server listen http://localhost:${port}`))
})
