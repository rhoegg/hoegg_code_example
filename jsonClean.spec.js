var expect = require('chai').expect,
    input = require('./data.json'),
    jsonClean = require('./jsonClean');

describe('jsonClean remove single duplicate', function () {

    it('should remove duplicate wholesaler child props',function(){
        var result = jsonClean.removeChildDuplicateKeyInParent(input);
        expect(result).to.deep.equal({
                "wholesaler": "US Foods",
                "delivered": "2015-06-19T05:15:00-0500",
                "contacts": [ { "name": "John Lederer"}, {"name": "Bill Delaney"} ]
            }
        )
    });
});

describe('jsonClean remove two duplicate properties', function () {
    var input = {x: 1, y: 2, child: [ {x: 1, y: 2, z:3 }, {x: 1, y: 2, z: 4},{x: 1, y: 2, z: 5}  ]}

    it('should remove duplicate wholesaler child props',function(){
        var result = jsonClean.removeChildDuplicateKeyInParent(input);
        expect(result).to.deep.equal({x: 1, y: 2, child: [{z:3}, {z:4},  {z:5} ]
            }
        )
    });
});

describe('jsonClean remove single property from two different children', function () {

    var input = {
        "wholesaler": "US Foods",
        "delivered": "2015-06-19T05:15:00-0500",
        "contacts": [
            {
                "wholesaler": "US Foods",
                "name": "John Lederer"
            },
            {
                "wholesaler": "Sysco",
                "name": "Bill Delaney"
            }
        ],
        "delivery": [
            {
                "delivered": "2015-06-19T05:15:00-0500",
                "name": "John Lederer"
            },
            {
                "delivered": "2015-06-19T05:15:00-0500",
                "name": "Bill Delaney"
            }
        ]

    }
    it('should remove duplicate wholesaler child props',function(){

        var result = jsonClean.removeChildDuplicateKeyInParent(input);
        expect(result).to.deep.equal({
                "wholesaler": "US Foods",
                "delivered": "2015-06-19T05:15:00-0500",
                "contacts": [ { "name": "John Lederer"}, {"name": "Bill Delaney"}],
                "delivery": [ { "name": "John Lederer"}, {"name": "Bill Delaney"} ]
            }
        )
    });
});


describe('jsonClean remove two values from two arrays', function () {
    var input = {
        x: 1,
        y: 2,
        leftChild: [ {x: 1, y: 2, z:3 }, {x: 1, y: 2, z: 4},{x: 1, y: 2, z: 5}  ],
        rightChild: [ {x: 1, y: 2, z:3 }, {x: 1, y: 2, z: 4},{x: 1, y: 2, z: 5}  ]
    };

    it('should remove duplicate two props from two child props',function(){
        var result = jsonClean.removeChildDuplicateKeyInParent(input);

        expect(result).to.deep.equal({x: 1, y: 2, leftChild: [{z:3}, {z:4},  {z:5} ], rightChild: [{z:3}, {z:4},  {z:5}] })

    })
});

describe('jsonClean remove duplicate from deeply nested object', function() {
  var input = {
    name: "Top Name",
    first: {
      firstWrapper: {
        firstInner: {
          name: "Inner Name",
          things: [
            {
              thingWrapper: {
                name: "First Inner Thing",
                type: "ThingOne"
              },
              thingWrapper: {
                name: "Second Inner Thing",
                type: "ThingTwo"
              }
            }
          ]
        }
      }
    },
    second: {
      name: "Second Name",
      type: "Not Very Nested"
    }
  };

  var result = jsonClean.removeChildDuplicateKeyInParent(input);

  expect(result).to.deep.equal({
    name: "Top Name",
    first: {
      firstWrapper: {
        firstInner: {
          things: [
            {
              thingWrapper: { type: "ThingOne" },
              thingWrapper: { type: "ThingTwo" }
            }
          ]
        }
      }
    },
    second: { type: "Not Very Nested"}}
  );
});
