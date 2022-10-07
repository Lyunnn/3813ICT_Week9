let assert = require('assert');
let app = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { Db } = require('mongodb');
let should = chai.should();
chai.use(chaiHttp);

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('/api/getlist', () => {
        it('it should GET all the products', (done) => {
            chai.request(app)
                .get('/api/getlist')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});