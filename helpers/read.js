var mfs = require("more-fs");

module.exports = function(handlebars){
    handlebars.registerHelper("read", function(filename){
        console.log(filename)
        return mfs.read(filename);
    });
};
