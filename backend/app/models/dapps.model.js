module.exports = (sequelize, Sequelize) => {
  const Dapp = sequelize.define("dapps", {
    usersId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    ipAddress: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });

  return Dapp;
};
