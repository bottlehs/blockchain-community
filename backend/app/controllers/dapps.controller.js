const db = require("../models");
const Dapp = db.dapps;
const Op = db.Sequelize.Op;
const Pagination = require("../utils/pagination");

// Create and Save a new Posts
exports.create = (req, res, next) => {
  // Validate request
  if (!req.body.categoriesId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else {
    // Categories ID 유무 체크
    const Category = db.categories;
    Category.findByPk(req.body.categoriesId)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: "Content can not be empty!",
          });
          return;
        }
      })
      .catch((err) => {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      });
  },
  if (!req.body.isOwner) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.contactEmail) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.logo) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.url) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.images) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.recommendTags) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.expectedMainnetTime) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.status) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }      
  if (!req.body.state) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.abstract) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.description) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.articleLink) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.hasAffiliateLink) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.affiliateLink) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.onChain) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.chainsIds) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else {
    /**
     * TODO : Chains ID 유무 체크
     */
  }
  if (!req.body.address) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }        
  if (!req.body.hasToken) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } 
  if (!req.body.tokenChainsId) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  } else {
    /**
     * TODO : Chains ID 유무 체크
     */
  }
  if (!req.body.tokenCoingeckoLink) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.tokenContract) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.tokenLogo) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.tokenName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.tokenTicker) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.decimal) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  if (!req.body.decimal) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Dapp
  const dapp = {
    usersId: req.user.id,
    categoriesId: req.body.categoriesId,
    isOwner: req.body.isOwner,
    contactEmail: req.body.contactEmail,
    logo: req.body.logo,
    name: req.body.name,
    url: req.body.url,
    images: req.body.images,
    recommendTags: req.body.recommendTags,
    expectedMainnetTime: req.body.expectedMainnetTime,
    status: req.body.status,
    state: req.body.state,
    abstract: req.body.abstract,
    description: req.body.description,
    articleLink: req.body.articleLink,
    hasAffiliateLink: req.body.hasAffiliateLink,
    affiliateLink: req.body.affiliateLink,
    onChain: req.body.onChain,
    chainsIds: req.body.chainsIds,
    address: req.body.address,
    hasToken: req.body.hasToken,
    tokenChainsId: req.body.tokenChainsId,
    tokenCoingeckoLink: req.body.tokenCoingeckoLink,
    tokenContract: req.body.tokenContract,
    tokenLogo: req.body.tokenLogo,
    tokenName: req.body.tokenName,
    tokenTicker: req.body.tokenTicker,
    decimal: req.body.decimal,
    ipAddress: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
  };

  // Save Dapp in the database
  Dapp.create(dapp)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Dapp.",
      });
    });
};

// Retrieve all Dapps from the database.
exports.findAll = (req, res) => {
  const { page, size, name } = req.query;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  const { limit, offset } = Pagination.getPagination(page, size);

  Dapp.findAndCountAll({ where: condition, limit: limit, offset: offset })
    .then((data) => {
      const response = Pagination.getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Dapps.",
      });
    });
};

// Find a single Dapp with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dapp.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Dapp with id=" + id,
      });
    });
};

// Update a Dapp by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Dapp.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        Dapp.findByPk(id)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: "Error retrieving Dapp with id=" + id,
            });
          });
      } else {
        res.send({
          message: `Cannot update Dapp with id=${id}. Maybe Dapp was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Dapp with id=" + id,
      });
    });
};

// Delete a Dapp with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Dapp.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Dapp was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Dapp with id=${id}. Maybe Dapp was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Dapp with id=" + id,
      });
    });
};

// Delete all Dapps from the database.
exports.deleteAll = (req, res) => {
  Dapp.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Dapps were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all dapps.",
      });
    });
};

// find all published Dapp
exports.findAllPublished = (req, res) => {
  Dapp.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving dapps.",
      });
    });
};
