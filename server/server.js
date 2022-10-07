var express = require('express'); //used for routing
var app = express();

var cors = require('cors');
app.use(cors());

var http = require('http').Server(app); //used to provide http functionality

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/../dist/week9/"));

const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if (err) {return console.log(err)}
    const dbName = "mydb";
    const db = client.db(dbName);

    require('./routes/api-add.js')(db, app);
    require('./routes/api-validid.js')(db, app);
    require('./routes/api-getlist.js')(db, app);
    require('./routes/api-getitem.js')(db, app, ObjectID);
    require('./routes/api-update.js')(db, app, ObjectID);
    require('./routes/api-deleteitem.js')(db, app, ObjectID);

    // listen to server
    let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server listening on: '+ host + 'port:' + port);
    console.log('Access it here: http://localhost:3000/');
    });
});








