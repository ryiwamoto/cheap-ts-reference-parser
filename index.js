var _ = require('lodash'),
  _path = require('path');

var TSReferenceParser = (function(){
  function TSReferenceParser(){
  }

  TSReferenceParser.fullReferenceRegEx = /^\/\/\/\s*<reference\s+path\s*=\s*('|")(.+?)\1.*?\/>/mg;

  TSReferenceParser.prototype.parse = function(path, content){
    var result = [],
      matched;
    while((matched = TSReferenceParser.fullReferenceRegEx.exec(content)) !== null){
      var fullPath = _path.resolve(_path.dirname(path), matched[2]);
      result.push(fullPath);
    }

    return result;
  };

  return TSReferenceParser
})();

module.exports = TSReferenceParser;
