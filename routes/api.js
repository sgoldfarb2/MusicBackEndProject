let express = require('express')
let router = express.Router()


router.get('/api', (req, res) => {
  res.send('we are totally going to make an API!!!!!')
})





module.exports = router
