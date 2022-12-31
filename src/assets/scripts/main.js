/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as fs from "fs";

const posthtml = require("posthtml");
const include = require("posthtml-include");

const html = fs.readFileSync("index.html");

posthtml([include({ encoding: "utf8" })])
  .process(html)
  .then((result) => console.log(result.html));
Options;
