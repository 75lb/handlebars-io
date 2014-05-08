var mfs = require("more-fs"),
    w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("read", function(filename, escape){
        var result = mfs.read(filename);
        if (escape === true) result = w.escapeForJSON(result);
        return result;
    });
};
