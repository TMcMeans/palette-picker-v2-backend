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
  },
  update(req, res) {
    return Palette.findOne({
      where: {
        id: req.params.paletteId,
        projectId: req.params.projectId
      }
    })
      .then(palette => {
        if (!palette) {
          return res.status(404).send({
            message: 'Palette Not Found'
          });
        }
        return palette
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedPalette => res.status(200).send(updatedPalette))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Palette.findOne({
      where: {
        id: req.params.paletteId,
        projectId: req.params.projectId
      }
    })
      .then(palette => {
        if (!palette) {
          return res.status(404).send({
            message: 'Palette Not Found'
          });
        }
        return palette
          .destroy()
          .then(() =>
            res.status(204).send({
              message: 'Palette Deleted Successfully'
            })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
