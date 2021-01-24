var createError = require('http-errors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

var app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, function(err){ 
  if (err) console.log(err); 
  console.log("Server listening on PORT", PORT);
}); 

module.exports = app;
