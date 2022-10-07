module.exports = function(db, app, ObjectID){
    app.post('/api/deleteitem', function(req, res){
        if(!req.body) {
            return res.sendStatus(400)
        }
        productID = req.body.productid;
        // var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        collection.deleteOne({id:parseInt(productID)}, (err, docs)=>{
            collection.find({}).toArray((err, data) => {
                console.log(data);
                res.send(data);
            });
            
        })
    });
}