/*
 Build an API with endpoints for:
 adding resources.
 retrieving a list of resources.
 adding projects.
 retrieving a list of projects.
 adding tasks.
*/

const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

// PROJECT ACTIONS * GET ALL

router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
     
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching projecs" });
    });
});

// PROJECT ACTIONS * GET BY ID

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.getById(id)
    .then(project => {
      const booleanProject = {
        ...project[0],
            completed: !!+`${project.completed}` // 
      };

      if (!project[0]) {
        return res.status(404).json({ message: "Invalid id" });
      } else {
        res.status(200).json(booleanProject);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching project" });
    });
});

// PROJECT ACTIONS * ADD

router.post("/", (req, res) => {
  const project = req.body;

  if (!project.project_name) {
    return res.status(404).json({ message: "Missing name" });
  }

  Projects.add(project)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding project" });
    });
});

// *** TASK ACTIONS * GET BY PRJ

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  console.log(id);
  Projects.getTasks(id)
    .then(tasks => {
      console.log(tasks);
      if (!tasks[0]) {
        res.status(404).json({ message: "Invalid id" });
      } else {
        res.status(200).json(tasks);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error fetching tasks" });
    });
});

// *** TASK ACTIONS * ADD

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const task = req.body;
  
  Projects.getById(id).then(project => {
    if (!project[0]) {
      return res.status(404).json({ message: "Invalid ID" });
    }
    if (!task.task_description) {
      return res.status(404).json({ message: "Missing description" });
    }
    Projects.addTask(id, task)
      .then(count => {
        res.status(201).json(count);
      })
      .catch(err => {
        res.status(500).json({ message: "Error adding task" });
      });
  });
});

module.exports = router;