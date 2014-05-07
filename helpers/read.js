var mfs = require("more-fs");

function escapeForJSON (str) {
    return str
      .replace(/[\"]/g, '\\"')
      .replace(/[\\]/g, '\\\\')
      .replace(/[\/]/g, '\\/')
      .replace(/[\b]/g, '\\b')
      .replace(/[\f]/g, '\\f')
      .replace(/[\n]/g, '\\n')
      .replace(/[\r]/g, '\\r')
      .replace(/[\t]/g, '\\t'); 
}

module.exports = function(handlebars){
    handlebars.registerHelper("read", function(filename, escape){
        var result = mfs.read(filename);
        if (escape === true) result = escapeForJSON(result);
        return result;
    });
};
