var path = require('path');

var fullReferenceRegEx = /^\/\/\/\s*<reference\s+path\s*=\s*('|")(.+?)\1.*?\/>/mg;

module.exports = function(filePath, fileContents){
  var result = [],
    matched;
  while((matched = fullReferenceRegEx.exec(fileContents)) !== null){
    var fullPath = path.resolve(path.dirname(filePath), matched[2]);
    result.push(fullPath);
  }

  return result;
};
