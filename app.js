var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var form = require('./routes/form');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
app.use('/', form);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


//console.log('Hello');
let baseURL = 'https://intense-headland-84262.herokuapp.com/api/tasks/';

function getData() {
    //axios.get('https://yamilmeal.herokuapp.com/api/meals')
    axios.get('https://damp-refuge-76823.herokuapp.com/')
        .then(function(res) {
            console.log(res)
        })
        .catch(function(err) {
            console.log(err)
        })
}


/*axios.get(baseURL)
.then(function(res) {
  data = res.data.data;
  data.forEach(function(a) {
      console.log(a.item, ':::', a.minutes);
  })
})
*/
/*
function postData(item, minutes) {
  axios.post(baseURL, {
    item: item,
    minutes: minutes
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

let getSpecificTask = (id) => {
  return axios.get(baseURL + id)
}


  axios.all([
    getSpecificTask(2),
    getSpecificTask(8),
    getSpecificTask(4),
    getSpecificTask(9)
    ])
  .then(axios.spread(function(a,b,c,d) {
    console.log(a.data.data);
    console.log(b.data.data);
    console.log(c.data.data);
    console.log(d.data.data);
  })).catch(function(err) { console.log('err:::', err) })

*/

module.exports = app;