module.exports = (sequelize, Sequelize) => {
  const Dapp = sequelize.define("dapps", {
    usersId: {
      /**
       * users id (후보키) */
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    categoriesId: {
      /**
       * categories id (후보키) */
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    isOwner: {
      /**
       * 소유자 여부 */
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    contactEmail: {
      /**
       * 연락 가능한 이메일 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    logo: {
      /**
       * 로고 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    name: {
      /**
       * 이름 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    url: {
      /**
       * 웹사이트 주소 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    images: {
      /**
       * 프리뷰 이미지 */
      type: Sequelize.TEXT,
      allowNull: false,
    },
    recommendTags: {
      /**
       * 추천태그 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    expectedMainnetTime: {
      /**
       * 메인넷 예상 공개일 */
      type: Sequelize.DATE(6),
      allowNull: false,
      defaultValue: "0000-00-00",
    },
    status: {
      /**
       * 상태
       * publish:공개 */
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    state: {
      /**
       * 디앱 상태
       * live:운영중
       * progress:준비중 */
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "live",
    },
    abstract: {
      /**
       * 짧은 설명 */
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      /**
       * 긴 설명 */
      type: Sequelize.TEXT,
      allowNull: false,
    },
    articleLink: {
      /**
       * 제품 리뷰 기사 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    // Affiliate/Referral Program
    hasAffiliateLink: {
      /**
       * 계열사 링크 여부 */
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    affiliateLink: {
      /**
       * 계열사 링크 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    // Smart Contracts Info ( 가 2개일 경우 요청을 2번 보냄 )
    onChain: {
      /**
       * 온 체인 여부
       * 2:Yes, it is 100% on-chain.
       * 1:There are some off-chain element.
       * 0:No, it is not running on a blockchain */
      type: Sequelize.TINYINT(1),
      allowNull: false,
    },
    chainsIds: {
      /**
       * chains id (후보키) / 다중 선택 */
      type: Sequelize.TEXT,
      allowNull: false,
    },
    address: {
      /**
       * 스마트컨트렉트 주소 */
      type: Sequelize.TEXT,
      allowNull: false,
    },
    /**
     * XXX : Token Info 별도 테이블로 분리 고려
     */
    // Start Token Info
    hasToken: {
      /**
       * 토큰여부 */
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    tokenChainsId: {
      /**
       * chains id (후보키) */
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    tokenCoingeckoLink: {
      /**
       * 코인 링크 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    tokenContract: {
      /**
       * Token Contract */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    tokenLogo: {
      /**
       * Token Logo 이미지 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    tokenName: {
      /**
       * Token Name ( Ticker of your token ) */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    tokenTicker: {
      /**
       * Token Ticker ( Ticker of your token ) */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    decimal: {
      /**
       * decimal */
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    ipAddress: {
      /**
       * 아이피주소 */
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });

  return Dapp;
};
