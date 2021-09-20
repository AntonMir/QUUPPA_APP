const nodemailer = require('nodemailer')

function sendEmail(receiver, userData) {
    // create reusable transporter object using the default SMTP transport
    const { name, email, question } = userData

    // base mail message
    const mailMessage = `
        <p>You have a new question</p>
        <h3>Contact Details</h3>
        <ul>  
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        </ul>
        <h3>Question</h3>
        <p>${question}</p>
    `
    // open smtp channel
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 25,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'insuran7test@mail.ru',
            pass: 'wqreyt214365',
        },
    })

    // mail settings
    let mailOptions = {
        from: 'insuran7test@mail.ru', // sender address
        to: receiver, // list of receivers
        subject: `Заявка от ${name}`, // Subject line
        html: mailMessage, // html body
    }

    // send mail
    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('ErrorSendMail: ' + error)
        } else {
            console.log('------------ MESSAGE SENT ------------')
            console.log(info)
            console.log('--------------------------------------')
        }
    })
}

module.exports = sendEmail
