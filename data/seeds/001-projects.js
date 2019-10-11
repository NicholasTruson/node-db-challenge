exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "Finish This Sprint",
      project_description: "must get to the MVP",
      completed: 0
    },
    {
      project_name: "Graduate From Lambda",
      project_description: "Must get to the Graduation",
      completed: 0
    },
    {
      project_name: "Land a badass Job",
      project_description: "Must make the money",
      completed: 0
    }
  ]);
}