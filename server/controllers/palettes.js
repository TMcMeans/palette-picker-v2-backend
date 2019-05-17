const Palette = require('../models').Palette;

module.exports = {
  create(req, res) {
    return Palette.create({
      title: req.body.title,
      color1: req.body.color1,
      color2: req.body.color2,
      color3: req.body.color3,
      color4: req.body.color4,
      color5: req.body.color5,
      projectId: req.params.projectId
    })
      .then(palette => res.status(201).send(palette))
      .catch(error => res.status(400).send(error));
  }
};
