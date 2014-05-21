var mfs = require("more-fs"),
    w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("read", function(filename){
        if (Array.isArray(filename)){
            var filenames = filename;
            return filenames.map(function(file){
                return {
                    filename: file,
                    content: mfs.read(file)
                };
            });
        } else {
            return mfs.read(filename);
        }
    });
};
