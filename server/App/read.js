module.exports = function(client, collection) {
    collection.find({}).toArray(function(err, result) {
        if(err) throw err;
        console.log(result);
        client.close();
    });
}