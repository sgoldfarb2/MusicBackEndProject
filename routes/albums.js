let express = require('express')
let router = express.Router()
let data = require('../data/data.json')

router.get('/albums', (req, res) => {


  res.render('albums', {
    allAlbums: data.ImagineDragons

  })
});

router.get('/albums/:albumid', (req, res) => {
  res.send('each album info coming soon!');
});

module.exports = router
