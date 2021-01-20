module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    backgroundColor: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    icon: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },    
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
  });

  return Category;
};
