'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Palettes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      projectId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Projects',
          key: 'id',
          as: 'projectId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Palettes');
  }
};
