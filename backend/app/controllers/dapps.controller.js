const db = require("../models");
const Dapp = db.dapps;
const Op = db.Sequelize.Op;
const Pagination = require("../utils/pagination");

// Create and Save a new Posts
exports.create = (req, res, next) => {
  // Validate request
  if (!req.body.name) {
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

  // Create a Dapp
  const dapp = {
    usersId: req.user.id,
    name: req.body.name,
    description: req.body.description,
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
