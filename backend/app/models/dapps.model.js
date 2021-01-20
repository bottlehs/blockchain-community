module.exports = (sequelize, Sequelize) => {
  const Dapp = sequelize.define("dapps", {
    usersId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    logo: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },    
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    website: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },    
    previewImage: {
      type: Sequelize.STRING,
      allowNull: false,
    },    
    category: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },    
    tags: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    shortDescription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    detailDescription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    reviewArticle: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    ipAddress: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });

  return Dapp;
};
