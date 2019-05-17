const projectsController = require('../controllers').projects;

const palettesController = require('../controllers').palettes;

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Palette Picker v2 API!'
    })
  );

  app.post('/api/projects', projectsController.create);
  app.get('/api/projects', projectsController.list);
  app.get('/api/projects/:projectId', projectsController.retrieve);
  app.put('/api/projects/:projectId', projectsController.update);
  app.delete('/api/projects/:projectId', projectsController.destroy);
  app.post('/api/projects/:projectId/palettes', palettesController.create);
  app.put(
    '/api/projects/:projectId/palettes/:paletteId',
    palettesController.update
  );
  app.delete(
    '/api/projects/:projectId/palettes/:paletteId',
    palettesController.destroy
  );
  //For any other request method
  app.all('/api/projects/:projectId/palettes', (req, res) =>
    res.status(405).send({
      message:
        'Method Not Allowed: Please use the /api/projects/:projectId endpoint to retrieve all palettes for a given project'
    })
  );
};
