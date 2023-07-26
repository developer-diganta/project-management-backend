require('dotenv').config();

const mailjet = require('node-mailjet').apiConnect(
    process.env.MAPI,
    process.env.MSECRET
  )

  const mailSender = (recepient, subject, bodyText, bodyHTML) => {
      const request = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'chrysaor07@gmail.com',
              Name: 'ManagD',
            },
            To: [
              {
                Email: recepient,
                Name: 'Receiver',
              },
            ],
            Subject: subject,
            TextPart: bodyText,
            HTMLPart:
              bodyHTML,
          },
        ],
      })
      request
        .then(result => {
          console.log(result.body)
        })
        .catch(err => {
          console.log(err.statusCode)
        })
      

  }

  module.exports=mailSender