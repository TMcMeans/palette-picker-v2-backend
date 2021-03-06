'use strict';
module.exports = (sequelize, DataTypes) => {
  const Palette = sequelize.define(
    'Palette',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      color1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      color2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      color3: {
        type: DataTypes.STRING,
        allowNull: false
      },
      color4: {
        type: DataTypes.STRING,
        allowNull: false
      },
      color5: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Palette.associate = models => {
    Palette.belongsTo(models.Project, {
      foreignKey: 'projectId',
      onDelete: 'CASCADE'
    });
  };
  return Palette;
};
