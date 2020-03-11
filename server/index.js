var express = require('express'); //for the form
var router = express.Router(); //routing the link
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config'); //stores the email user and pass credentials

var transport = {
    host: 'smtp.mailtrap.io', // mail trap is currently being used to catch spam and is a free service with one inbox
    port: 2525,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Sports Spots Email Server Is On');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var gymName = req.body.gymName
  var googleAddressLink = req.body.googleAddressLink
  var sport = req.body.sport
  var dayOfWeek = req.body.dayOfWeek
  var time = req.body.time
  var cost = req.body.cost
  var levelDescription = req.body.levelDescription
  var website = req.body.website
  var description = req.body.description
  var numberOfCourts = req.body.numberOfCourts
  var courtType = req.body.courtType
  var minimumAge = req.body.minimumAge
  var content = ` \n
                 Name: ${name} \n 
                 Email: ${email} \n 
                 Message: ${message} \n 
                 Gym Name: ${gymName} \n 
                 Google Address Link: ${googleAddressLink} \n 
                 Sport: ${sport} \n 
                 Day of Week: ${dayOfWeek} \n 
                 Time: ${time} \n 
                 Cost: ${cost} \n 
                 Level Description: ${levelDescription} \n 
                 Website: ${website} \n 
                 Description: ${description} \n 
                 Number of Courts: ${numberOfCourts} \n 
                 Court Type: ${courtType} \n 
                 Minimum Age: ${minimumAge}`

  var mail = {
    from: name,
    to: 'danlee@pdx.edu;larrypchiem@gmail.com;jjesse@pdx.edu',  // Change to email address that you want to receive messages on
    subject: 'Gym addition for sport spots',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)