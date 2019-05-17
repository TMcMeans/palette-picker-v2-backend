const projectsController = require('../controllers').projects;

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Palette Picker v2 API!'
    })
  );

  app.post('/api/projects', projectsController.create);
  app.get('/api/projects', projectsController.list);
};
