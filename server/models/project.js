'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    'Project',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {}
  );
  Project.associate = models => {
    Project.hasMany(models.Palette, {
      foreignKey: 'projectId',
      as: 'projectPalettes'
    });
  };
  return Project;
};
