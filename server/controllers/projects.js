const Project = require('../models').Project;
const Palette = require('../models').Palette;

module.exports = {
  create(req, res) {
    return Project.create({
      title: req.body.title
    })
      .then(project => res.status(201).send(project))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Project.findAll({
      include: [
        {
          model: Palette,
          as: 'projectPalettes'
        }
      ]
    })
      .then(projects => res.status(200).send(projects))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Project.findByPk(req.params.projectId, {
      include: [
        {
          model: Palette,
          as: 'projectPalettes'
        }
      ]
    })
      .then(project => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found'
          });
        }
        return res.status(200).send(project);
      })
      .catch(error => res.status(400).send(error));
  }
};
