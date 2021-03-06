const app = require('../../config/app');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should;


function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrayCaracteristica = [];

describe("GET /Caracteristica", function() {
  it("deve retornar um json array", function(done) {
    request(app)
    .get('/caracteristica')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if(err) throw err;

      expect(res.body).to.be.an('array');
      expect(res.body).to.have.length.of.at.least(3);

      arrayCaracteristica = res.body;

      done();
    });
  });
});



describe("GET /caracteristica/:id", function() {
    var caracteristica;

    it("deve retornar um json object e código 200", function(done) {
      var id = arrayCaracteristica[0].car_cd_caracteristica;

      request(app)
      .get(`/caracteristica/${id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;

        expect(res.body).to.be.a('object');
        expect(res.body).to.have.all.keys('car_cd_caracteristica', 'car_ds_caracteristica');

        caracteristica = res.body

        done();
      });
    });

    it("deve ter car_cd_caracteristica igual a :id", function(done) {
        var id = arrayCaracteristica[0].car_cd_caracteristica;
        expect(caracteristica).to.have.property('car_cd_caracteristica').that.is.equals(id);

      done();
    });

    it("deve retornar 'car_ds_caracteristica' como string ", function(done){
        expect(caracteristica).to.have.property('car_ds_caracteristica').that.is.a('string');

        done();
    });

    it("Deve retornar 'car_ds_caracteristica' Wi-fi, Ar-condicionado e TV consecutivamente", function(done){
      expect(caracteristica).to.have.property('car_ds_caracteristica').to.eql('Wi-fi');
      expect(arrayCaracteristica[1].car_ds_caracteristica).to.eql('Ar-condicionado');
      expect(arrayCaracteristica[2].car_ds_caracteristica).to.eql('TV');

      done();
    });
});
