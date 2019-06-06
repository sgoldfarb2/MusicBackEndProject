let express = require('express')
let app = express()
let port = 3001
let bodyParser = require('body-parser')
// let myData = require('./data/data.json')

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.json());

app.use(require('./routes/index'));
app.use(require('./routes/albums'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))

app.listen(port, () => {
  console.log('App listening on port 3001!');
});
