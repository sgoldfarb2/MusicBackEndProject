let express = require('express')
let router = express.Router()
let myData = require('../data/feedback.json')
let bodyParser = require('body-parser')
let fs = require('fs')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/feedback', (req, res) => {
  res.render('feedback')
})

router.get('/api', (req, res) => {
  res.json(myData.comments)

})

router.post('/api', (req, res) => {
  myData.comments.unshift(req.body)
  fs.writeFile('data/feedback.json', JSON.stringify(myData), function (err) {
    if (err) {
      console.log(err)
    }

  })
  res.send('you made a post request you badass!')
})




module.exports = router
