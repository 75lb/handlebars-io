var handlebars = require("handlebars"),
    mfs = require("more-fs");

require("../helpers/read")(handlebars);

console.log(handlebars.compile("{{read 'test/one.txt'}}")());
