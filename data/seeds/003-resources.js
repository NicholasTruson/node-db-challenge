exports.seed = function(knex) {
  return knex("resources").insert([
    {
      resource_name: "resource 1",
      resource_description: "this is useful"
    },
    {
      resource_name: "resource 2",
      resource_description: "this is useful"
    },
    {
      resource_name: "resource 3",
      resource_description: "this is useful"
    },
    {
      resource_name: "resource 4",
      resource_description: "this is useful"
    },
    {
      resource_name: "resource 5",
      resource_description: "this is useful"
    },
    {
      resource_name: "resource 6",
      resource_description: "this is useful"
    }
  ]);
}