module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorials", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    published: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  return Tutorial;
};
