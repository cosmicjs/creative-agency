var express = require('express')
var app = express()
var hogan = require('hogan-express')
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(__dirname + '/public/'))
var Cosmic = require('cosmicjs')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var bucket_slug = process.env.COSMIC_BUCKET || 'creative-agency'
var config = {
  bucket: {
    slug: bucket_slug,
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY
  }
}
app.get('/', function(req, res) {
  Cosmic.getObjects(config, function(err, response) {
    var cosmic = response
    res.locals.cosmic = cosmic
    res.render('index.html')
  })
})
app.post('/', function(req, res) {
  var api_key = process.env.MAILGUN_KEY // add mailgun key
  var domain = process.env.MAILGUN_DOMAIN // add mailgun domain
  if (!api_key || !domain)
    return res.end('You must add a MailGun api key and domain.  Contact your developer to add these values.');
  var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })
  var message = 'Name: ' + req.body.name + '\n\n' +
  'Subject: ' + req.body.subject + '\n\n' +
  'Message: ' + req.body.message + '\n\n'
  var data = {
    from: 'Your Website <me@' + domain + '>',
    to: process.env.RECEIVING_EMAIL || 'tony@cosmicjs.com',
    subject: req.body.name + ' sent you a new message: ' + req.body.subject,
    text: message
  }
  mailgun.messages().send(data, function (error, body) {
    res.end('Success!  Message sent.') // Do some sort of redirect here with a success message
  })
})
app.listen(app.get('port'))
