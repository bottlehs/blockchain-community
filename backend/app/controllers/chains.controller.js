const db = require("../models");
const Chain = db.chain;
const Op = db.Sequelize.Op;
const Pagination = require("../utils/pagination");

// Create and Save a new Chain
exports.create = (req, res, next) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  if (!req.body.colorIcon) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  if (!req.body.icon) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }  

  if (!req.body.iconNew) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }    

  if (!req.body.supportToken) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
    
  // Create a Chain
  const chain = {
    name: req.body.name,
    colorIcon: req.body.colorIcon,
    icon: req.body.icon,
    iconNew: req.body.iconNew,
    supportToken: req.body.supportToken,
    ipAddress: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
  };

  // Save Chain in the database
  Chain.create(chain)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Chain.",
      });
    });
};

// Retrieve all Chains from the database.
exports.findAll = (req, res) => {
  const { page, size, question } = req.query;
  var condition = question
    ? { question: { [Op.like]: `%${question}%` } }
    : null;

  const { limit, offset } = Pagination.getPagination(page, size);

  Chain.findAndCountAll({ where: condition })
    .then((data) => {
      const response = Pagination.getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving chains.",
      });
    });
};

// Find a single Chain with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Chain.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Chain with id=" + id,
      });
    });
};

// Update a Chain by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Chain.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        Chain.findByPk(id)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: "Error retrieving Chain with id=" + id,
            });
          });
      } else {
        res.send({
          message: `Cannot update Chain with id=${id}. Maybe Chain was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Chain with id=" + id,
      });
    });
};

// Delete a Chain with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Chain.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Chain was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Chain with id=${id}. Maybe Chain was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Chain with id=" + id,
      });
    });
};

// Delete all Chains from the database.
exports.deleteAll = (req, res) => {
  Chain.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Chains were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all chains.",
      });
    });
};

// find all published Chain
exports.findAllPublished = (req, res) => {
  Chain.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving chains.",
      });
    });
};
