prodArr = [
    {id: 1, name: "grape", description: "desc 1", price: 1, units: 10},
    {id: 2, name: "orange", description: "desc 2", price: 2, units: 10},
    {id: 3, name: "apple", description: "desc 3", price: 3, units: 10}
]

module.exports = function(client, collection) {
    collection.insertMany(prodArr, function(err, result) {
        console.log(prodArr);
        if(err) throw err;
        console.log(result);
        client.close();
    });
}
