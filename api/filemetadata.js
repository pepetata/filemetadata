var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
 
module.exports = function(app, db) {

    app.post('/uploadForm', upload.single('file'), function (req, res, next) {
        // req.file is the `avatar` file 
        // req.body will hold the text fields, if there were any 
        console.log('POST',req.file)
        res.render('filesize.jade',{file: req.file.originalname, size: req.file.size})
    })
 
    app.get('/', handleIndex) 
    
    // app.get('/style.css', doNothing) 
    
    // app.get('/favicon.icon', doNothing) 
    
    app.all('*', handleError);
    
    function handleIndex (req, res) {
        res.render('index.jade')
    }

    function handleError (req, res) {
        res.render('notfound.jade')
        console.log('error',req.url)
    }
    function doNothing (req, res) {
        return
    }


  
}
