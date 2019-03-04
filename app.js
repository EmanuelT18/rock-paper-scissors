const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index');

//settings
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname,'public')))
//start a server
app.listen(app.get('port'), () => {
    console.log("Server on port" + app.get('port'))
});
