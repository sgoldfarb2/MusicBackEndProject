let express = require('express')
let app = express()
let port = 3001

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(require('./routes/index'));
app.use(require('./routes/albums'))

app.listen(port, () => {
  console.log('App listening on port 3001!');
});
