const express = require('express')
const GoogleCredentialController =  require('./controllers/google.credentials.controller');
const app = express()

//set the template engine ejs
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('public'))

//FIX ME: here we have to get the google APIkey in another way.
app.locals.googleCredential = new GoogleCredentialController("1086925412710-eokas20k03k70dhf2rbi97jrtggntusb.apps.googleusercontent.com")

//routes
app.get('/', (req, res) => {
	res.render('index')
})

//Listen on port 8080
server = app.listen(8080)

module.exports = server