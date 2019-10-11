exports.up = function(knex) {
    return knex.schema
/* PROJECT
a unique Id.
 a name. This column is required.
 a description.
 a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be false.
 */

      .createTable("projects", tbl => {
        tbl.increments();

        tbl.string("project_name").notNullable();
        tbl.string("project_description");
        
        tbl
          .boolean("complete")
          .notNullable()
          .defaultTo(0); // returns a default false
      })

/* TASK
 a unique id.
 a description of what needs to be done. This column is required.
 a notes column to add additional information.
 a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be false.
*/

.createTable("tasks", tbl => {
    tbl.increments();

    tbl.string("task_description").notNullable();
    tbl.string("task_notes");
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(0); // FALSE DEFAULT
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  })

/* RESOURCE
 a unique Id.
 a name. This column is required.
 a description.
*/

.createTable("resources", tbl => {
    tbl.increments();

    tbl
      .string("resource_name")
      .notNullable()
      .unique();
    tbl.string("resource_description");
  })

exports.down = function(knex) {
    return knex.schema

}}
