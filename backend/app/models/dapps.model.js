module.exports = (sequelize, Sequelize) => {
  const Dapp = sequelize.define("dapps", {
    usersId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    categoriesId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    categoriesId: {
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
      type: Sequelize.TEXT,
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
    abstract: { 
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: { 
      type: Sequelize.TEXT,
      allowNull: false,
    },
    articleLink: { 
      type: Sequelize.STRING(100),
      allowNull: false,
    },  
    // Affiliate/Referral Program
    hasAffiliateLink: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },        
    affiliateLink: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    // Smart Contracts Info ( 가 2개일 경우 요청을 2번 보냄 )
    onChain: {
      type: Sequelize.TINYINT(1),
      allowNull: false,
    },    
    chainsIds: {
      type: Sequelize.TEXT,
      allowNull: false,
    },      
    address: {
      type: Sequelize.TEXT,
      allowNull: false,      
    },    
    // Token Info ( 별도 테이블로 분리 할것 )
    hasToken: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },    
    tokenChainsId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    tokenCoingeckoLink: { 
      type: Sequelize.STRING(100),      
      allowNull: false,
    },
    tokenContract: { 
      type: Sequelize.STRING(100),      
      allowNull: false,
    },      
    tokenLogo: {
      type: Sequelize.STRING(100),      
      allowNull: false,
    },
    tokenName: { 
      type: Sequelize.STRING(100),      
      allowNull: false,
    },
    tokenTicker: { 
      type: Sequelize.STRING(100),      
      allowNull: false,
    },
    decimal: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    // End Token Info
    ipAddress: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });

  return Dapp;
};
