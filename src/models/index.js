import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_PROJECTS, {
  dialect: 'postgres'
});

const models = {
  Project: sequelize.import('./project'),
  Palette: sequelize.import('./palette')
};

//Build relational schema based on associate method in models
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
