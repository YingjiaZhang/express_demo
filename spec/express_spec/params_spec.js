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