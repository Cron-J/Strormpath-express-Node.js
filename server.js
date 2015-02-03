var express = require('express'),
    stormpath = require('express-stormpath');
    
var app = express();

// parse urlencoded request bodies into req.body
app.use(express.bodyParser())

var port = 8000;

app.use(stormpath.init(app, {
  apiKeyId: '6ZZ6V7NWGOP75LNPCUFRBRLWE',
  apiKeySecret: '7pRj82h5Xj+dW8SuL6s6RfjNc5Emmh++0Wifm8GJjy4',
  application: 'https://api.stormpath.com/v1/applications/2MP9Meqotw0WiDneA3z0il',
  secretKey: 'lq1idp5=%zw%n3c+c3u45r-mj5-9r+klqtu00@+qw989l9%8wz',
}));

app.get('/',function(req, res, next) {
	res.end("Welcome!")
});

app.listen(port);

console.log('Express app started on port ' + port);
