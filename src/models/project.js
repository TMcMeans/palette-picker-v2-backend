const project = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    title: {
      type: DataTypes.STRING,
      //adding unique key keeps duplicated titles from appearing in db
      unique: true
    }
  });

  //Create relational db: 1 project:N palettes
  Project.associate = models => {
    Project.hasMany(models.Palettes);
  };

  return Project;
};
