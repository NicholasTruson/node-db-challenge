exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();

        tbl.string("project_name").notNullable();
        tbl.string("project_description");
        
        tbl
          .boolean("complete")
          .notNullable()
          .defaultTo(0); // returns a default false
      })

exports.down = function(knex) {
    return knex.schema

}
