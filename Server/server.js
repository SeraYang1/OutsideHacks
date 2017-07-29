//require('./config.js')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')
const _ = require('lodash')

var {
	mongoose
} = require('./db/mongoose')

var app = express();
//HEROKU - make sure you change the port to be a global port
const port = process.env.PORT || 3000

//middleware that allows us to send json to express
app.use(bodyParser.json());




app.listen(port, () => {
	console.log(`Started on port ${port}`)
})

module.exports = {
	app
}
