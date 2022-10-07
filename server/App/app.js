const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"; // connection url
const dbName = 'mydb';
const colName = 'products'; //collection name
const client = new MongoClient(url); // create new mongoclient

const add = require('add.js');
const read = require('read.js');
const remove = require('remove.js');
const update = require('update.js');

client.connect(function(err){
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection(colName);
    add(client, collection);
    read(client, collection);
    remove(client, collection);
    update(client, collection);
    client.close
})