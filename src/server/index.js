// References: 
// Lesson 4, Concept 8, Final Code: https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0430/modules/c73f80be-8f45-406d-a709-8123a69e6d52/lessons/722ecfe4-3174-4a6e-8638-ea0ab8eb49ac/concepts/d8172904-6de9-4216-86e9-8b5a093d50aa
// Knowledge Response: https://knowledge.udacity.com/questions/503907?utm_campaign=ret_600_auto_ndxxx_knowledge-comment-created_na&utm_source=blueshift&utm_medium=email&utm_content=ret_600_auto_ndxxx_knowledge-comment-created_na&bsft_clkid=5e35f546-a3c6-41ae-874e-8660eb2fe41a&bsft_uid=08ebc84d-5614-480b-aa4e-e5c03065d705&bsft_mid=efb661eb-33d1-4803-99cb-3c704771f221&bsft_eid=bee2de82-decd-e24c-d46e-8971c91d877c&bsft_txnid=683acc04-8d7e-439b-8a40-3728297bc1d0&bsft_mime_type=html&bsft_ek=2021-02-28T15%3A53%3A13Z&bsft_aaid=8d7e276e-4a10-41b2-8868-423fe96dd6b2&bsft_lx=1&bsft_tv=1#503957
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY
const apiURL = 'https://api.meaningcloud.com/sentiment-2.1?'

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


/* Function to POST data */
// Async function that fetches the URL and necessary data and logs it
// References: 
// Weather Journal App project from previous course Lesson 4-6: https://classroom.udacity.com/nanodegrees/nd0011/parts/cd0429/modules/d153872b-b417-4f32-9c77-d809dc21581d/lessons/ls1846/concepts/211c2a41-4ab7-48ea-94cc-b44b2e4363c4
// Knowledge Post: https://knowledge.udacity.com/questions/503907?utm_campaign=ret_600_auto_ndxxx_knowledge-comment-created_na&utm_source=blueshift&utm_medium=email&utm_content=ret_600_auto_ndxxx_knowledge-comment-created_na&bsft_clkid=5e35f546-a3c6-41ae-874e-8660eb2fe41a&bsft_uid=08ebc84d-5614-480b-aa4e-e5c03065d705&bsft_mid=efb661eb-33d1-4803-99cb-3c704771f221&bsft_eid=bee2de82-decd-e24c-d46e-8971c91d877c&bsft_txnid=683acc04-8d7e-439b-8a40-3728297bc1d0&bsft_mime_type=html&bsft_ek=2021-02-28T15%3A53%3A13Z&bsft_aaid=8d7e276e-4a10-41b2-8868-423fe96dd6b2&bsft_lx=1&bsft_tv=1#503957
app.post('/apiData', async function(req, res) {
    const apiCall = await fetch(`${apiURL}key=${apiKey}&url=${req.body.url}&lang=en`)
    try {
        const data = await apiCall.json();
        res.send(data);
        console.log(data);
    } catch(error) {
        console.log("error", error)
    }
})
