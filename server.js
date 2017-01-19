var express = require('express')
        , stylus = require('stylus')
        , path = require('path')
        , api = require("./api/filemetadata.js")
        , app = express()
        , db


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'stylus');
app.use(express.static(path.join(__dirname, 'views')));
app.use(stylus.middleware(path.join(__dirname, 'views')));



api(app,db)



var port = process.env.PORT || 8080;
  app.listen(port, function () {
    console.log('App listening on port '+port+' !')
  })
  
  