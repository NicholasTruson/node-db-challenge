/*
 Build an API with endpoints for:
 adding resources.
 retrieving a list of resources.
 adding projects.
 retrieving a list of projects.
 adding tasks.
*/

const express = require("express");

const Resources = require("../resources/resource-model");

const router = express.Router();

// GET RESOURCES

router.get("/", (req, res) => {
  Resources.get()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching resources" });
    });
});

// GET BY ID

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.getById(id)
    .then(resource => {
      if (!resource[0]) {
        res.status(404).json({ message: "Invalid ID" });
      } else {
        res.status(200).json(resource);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Error fetching resource" });
    });
});

// ADD RESOURCE

router.post("/", (req, res) => {
  const resource = req.body;

  Resources.add(resource)
    .then(count => {
      res.status(201).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding resource" });
    });
});

module.exports = router;