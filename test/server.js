var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('./test'));
app.use(bodyParser.json());

app.route('/ajax')
  .get(function(req, res) {
    console.log('Get working!!!');
    res.status(200).send('Get working!!!');
  })
  .post(function(req, res) {
    console.log(req.body);
    res.status(200).send('Post working!!!');
  });

app.route('/ajax/:id')
  .get(function(req, res) {
    console.log('Get id ' + req.params.id)
    res.status(200).send('Get working!!!');
  })
  .delete(function(req, res) {
    console.log('Remove id ' + req.params.id);
    res.status(200).send('Delete working!!!');
  })
  .put(function(req, res){
    console.log(req.body);
    res.status(200).send('Put working!!!');
  });


app.listen(3000, function() {
  console.log('Listening port 3000');
});
