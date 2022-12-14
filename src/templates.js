const fs = require("fs");
const path = require("path");
const pug = require("pug");

const options = {
  basedir: path.join(__dirname, "../templates"),
};

/** @module templates
 * This module exports a map of template names to functions used to render Embedded JavaScript Templates found in the templates directory of the project.
 */
var templates = {};

var files = fs.readdirSync("templates");
files.forEach((file) => {
  // Compile the template file and add it to templates
  const templateString = fs.readFileSync(path.join("templates", file), {
    encoding: "utf8",
  });
  templates[path.basename(file, ".pug")] = pug.compile(templateString, options);
});

module.exports = templates;
