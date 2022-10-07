module.exports = function(db, app, ObjectID){
    app.post('/api/getitem', function(req, res){
        if(!req.body) {
            return res.sendStatus(400)
        }
        productID = req.body.productid;
        console.log(productID);
        // var objectid = new ObjectID(productID);
        // console.log(objectid);
        db.collection('products').find({id:parseInt(productID)}).toArray((err, docs) =>{
                console.log(docs);
                res.send({"prod": docs});
            })
    })
};