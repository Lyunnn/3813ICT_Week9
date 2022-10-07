const queryJSONdel = { id: 3 };

module.exports = function(client, collection) {
    collection.deleteMany(queryJSONdel, function(err, result) {
        console.log(queryJSONdel);
        if(err) throw err;
        client.close();
    });
}