module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorials", {
    title: {
      /**
       * 제목 */          
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      /**
       * 설명 */          
      type: Sequelize.TEXT,
      allowNull: false,
    },
    published: {
      /**
       * 공개여부 */          
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  return Tutorial;
};
