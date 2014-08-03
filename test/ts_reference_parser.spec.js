var fs = require('fs');
var TsReferenceParser = require('../index.js');

describe("TSReferenceParser", function () {
  it("can parse multiple reference tag", function(){
    var fixturePath = __dirname + '/fixtures/internal_module.ts';
    var fixtureContent = fs.readFileSync(fixturePath, {encoding: 'utf8'});

    var result = new TsReferenceParser({basePath: '.'}).parse( fixturePath, fixtureContent);

    var expected = [
        __dirname + '/fixtures/a.ts',
        __dirname + '/b.ts',
    ];
    expect(result).toEqual(expected);
  });
});
