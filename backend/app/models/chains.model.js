module.exports = (sequelize, Sequelize) => {
  const Chain = sequelize.define("chains", {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    colorIcon: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    icon: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    iconNew: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },    
    supportToken: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },    
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
  });

  return Chain;
};
