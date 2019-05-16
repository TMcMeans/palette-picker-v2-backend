const palette = (sequelize, DataTypes) => {
  const Palette = sequelize.define('palette', {
    title: {
      type: DataTypes.STRING,
      //adding unique key keeps duplicated titles from appearing in db
      unique: true
    },
    color1: DataTypes.STRING,
    color2: DataTypes.STRING,
    color3: DataTypes.STRING,
    color4: DataTypes.STRING,
    color5: DataTypes.STRING
  });

  //Create relational db: 1 project:N palettes
  Palette.associate = models => {
    Palette.belongsTo(models.Project);
  };

  return Palette;
};
