module.exports = (sequelize, Sequelize) => {
  const Chain = sequelize.define("chains", {
    name: {
      /**
       * 블록체인명 */      
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    colorIcon: {
      /**
       * 아이콘 컬러(HEX) */      
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    icon: {
      /**
       * 아이콘 */      
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    iconNew: {
      /**
       * 새로운 아이콘 */      
      type: Sequelize.STRING(20),
      allowNull: false,
    },    
    supportToken: {
      /**
       * 토큰 지원여부 */      
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },    
    status: {
      /**
       * 상태
       * publish:공개 */      
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    ipAddress: {
      /**
       * 아이피주소 */              
      type: Sequelize.STRING(100),
      allowNull: false,
    },    
  });

  return Chain;
};
