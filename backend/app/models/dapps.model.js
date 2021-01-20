module.exports = (sequelize, Sequelize) => {
  const Dapp = sequelize.define("dapps", {
    usersId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    categorysId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    isOwner: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    contactEmail: {
      type: Sequelize.STRING(100),
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
    url: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },    
    images: {
      type: Sequelize.STRING,
      allowNull: false,
    },     
    recommendTags: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    expectedMainnetTime: {
      type: Sequelize.DATE(6),
      allowNull: false,
      defaultValue: "0000-00-00",
    },
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    state: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "live",
    },    
    abstract: { // shortDescription
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: { // detailDescription
      type: Sequelize.STRING,
      allowNull: false,
    },
    articleLink: { // reviewArticle
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
