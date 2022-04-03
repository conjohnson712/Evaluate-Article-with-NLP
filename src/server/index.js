// Reference: The final product from Lesson 4, Concept 8:
// https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0430/modules/c73f80be-8f45-406d-a709-8123a69e6d52/lessons/722ecfe4-3174-4a6e-8638-ea0ab8eb49ac/concepts/d8172904-6de9-4216-86e9-8b5a093d50aa
const dotenv = require('dotenv');
dotenv.config();

// NLP "Sentiment Analysis API"
var SentimentAnalysisApi = new SentimentAnalysisApi({
    application_key: process.env.API_KEY
})

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sentimentAnalysis = require('sentiment-analysis-api')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())
app.use(sentimentAnalysis())



app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
