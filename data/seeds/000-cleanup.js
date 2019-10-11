const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    //mode: 'truncate', -- might break something in sqlite3? don't fully understand
    ignoreTables: ["knex_migrations", "knex_migrations_lock"] 
  });
};