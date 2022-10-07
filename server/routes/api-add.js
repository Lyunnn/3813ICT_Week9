module.exports = function(db, app){
    app.post('/api/add', function(req, res){
        if(!req.body) {
            return res.sendStatus(400)
        }
        const prod = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            units: req.body.units
        }
        const collection = db.collection('products');
        collection.find({'id':prod.id}).count((err, count) => {
            if(count==0) {
                collection.insertOne(prod, (err, dbres) => {
                    if (err) throw err;
                    let num = dbres.insertedCount;
                    res.send({'num': num, err:null});
                });
            } else {
                res.send({num:0, err:"duplicate item"});
            }
        });
        
    });
};