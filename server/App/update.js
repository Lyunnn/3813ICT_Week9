const queryJSONup = { name: "updated product 2" };
const updateJSON = { id: 2 };

module.exports = function(client, collection) {
    collection.updateMany(queryJSONup, { $set: updateJSON }, function(err, result) {
        console.log(queryJSONup);
        console.log("Set: ", updateJSON);
        if(err) throw err;
        client.close();
    });
}