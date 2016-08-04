/**
 * Created by Sunshine on 2016/8/4.
 */
var request = require('supertest');
var app = require('../../src/express/params.js');

describe('GET /params', function () {
    it('should response get parameter from params', function (done) {
        request(app)
            .get('/params/zyj')
            .end(function (err, res) {
                expect(res.text).toEqual('zyj');
                done(err);
            })
    });
});

describe('GET /query', function () {
    it('should get a parameter from query', function (done) {
        request(app)
            .get('/query?name=zyj')
            .end(function (err, res) {
                expect(res.text).toEqual('zyj');
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
});

describe('POST /body', function () {
    it('should get a parameter from body', function (done) {
        request(app)
            .post('/body')
            .send({name: 'zyj'})
            .end(function (err, res) {
                expect(res.text).toEqual('zyj');
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
});


