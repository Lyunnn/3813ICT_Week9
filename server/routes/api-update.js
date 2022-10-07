module.exports = function(db, app, ObjectID){
    var result;
    app.post('/api/update', function(req, res){
        if(!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;
        // productID = req.body.productid;
        const collection = db.collection('products');
        collection.updateOne({id:parseInt(product.id)}, {$set: {name:product.name, description:product.description, price:product.price, units: product.units}}, ()=>{
            res.send({"ok": product.objid});
        })
    });
}