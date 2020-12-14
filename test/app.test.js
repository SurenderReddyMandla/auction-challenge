const expect = require('chai').expect;
const myApp = require('../src/app.js');
let expectedOutput = [
                      [
                        { bidder: 'AUCT', unit: 'banner', bid: 35 },
                        { bidder: 'BIDD', unit: 'sidebar', bid: 60 }
                      ]
                    ]
describe('output based on inputjson', function(){
    it('should give expected output', function(){
      console.log(myApp);
      expect(myApp).deep.to.equal(expectedOutput);
    });
});