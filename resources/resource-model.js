/*
 Build an API with endpoints for:
 adding resources.
 retrieving a list of resources.
 adding projects.
 retrieving a list of projects.
 adding tasks.
*/

const db = require("./db-config.js");

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db("resources");
}

function getById(id) {
  return db("resources").where({ id });
}

function add(resource) {
  return db("resources").insert(resource);
}