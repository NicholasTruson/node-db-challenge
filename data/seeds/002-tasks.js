exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      task_description: "Commit Frequently",
      task_notes: "document the process",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "Remember the ReadMe Questions",
      task_notes: "you always forget",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "Catch Up on Career Assignments",
      task_notes: "It is important",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "Polish Up Old Projects",
      task_notes: "They are a mess",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "Reach out to employers",
      task_notes: "get used to it",
      completed: 0,
      project_id: 3
    },
    {
      task_description: "Practice Interviewing",
      task_notes: "become a smooth talker",
      completed: 0,
      project_id: 3
    },
  ]);
}