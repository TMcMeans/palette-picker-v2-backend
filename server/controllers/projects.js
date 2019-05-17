const Project = require('../models').Project;

module.exports = {
  create(req, res) {
    return Project.create({
      title: req.body.title
    })
      .then(project => res.status(201).send(project))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Project.findAll()
      .then(projects => res.status(200).send(projects))
      .catch(error => res.status(400).send(error));
  }
};