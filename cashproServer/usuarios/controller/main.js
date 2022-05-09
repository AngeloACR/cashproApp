const bcrypt = require("bcryptjs");
const environment = require("../../environments/local");
const { usuarioLogger } = require("../logging");
const Usuario = require("../models/usuario");
const mainController = {
  hashPass: async (password) => {
    try {
      let salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw error;
    }
  },

  addUser: async (req, res) => {
    try {
      let newUser = new Usuario({
        username: req.body.username,
        names: req.body.names,
        lastnames: req.body.lastnames,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        birthday: req.body.birthday,
        type: req.body.type,
      });
      let user = await Usuario.findOne({ email: newUser.email });
      if (user) {
        throw new Error("El correo ya se encuentra registrado");
      } else {
        user = await Usuario.findOne({ username: newUser.username });
        if (user) {
          throw new Error("Nombre de usuario no disponible");
        } else {
          newUser.password = await mainController.hashPass(newUser.password);
          user = await newUser.save();
          let response = {
            status: true,
            values: user,
          };
          usuarioLogger.info("addUser", {
            data: response,
          });
          res.status(200).json(response);
        }
      }
    } catch (error) {
      usuarioLogger.error("addUser.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
  deleteUser: async (req, res) => {
    try {
      let username = req.params.username;
      const query = { username: username };
      let user = await Usuario.findOne(query);
      let appointments;
      switch (user.type) {
        case "Admin":
          user.adminId.remove();
          appointments = user.patientId.appointmentsId;
          for (let appointment of appointments) {
            await appointment.remove();
          }
          user.patientId.remove();
          break;
        case "Paciente":
          appointments = user.patientId.appointmentsId;
          for (let appointment of appointments) {
            await appointment.remove();
          }
          user.patientId.remove();
          break;

        default:
          appointments = user.doctorId.appointmentsId;
          for (let appointment of appointments) {
            await appointment.remove();
          }
          user.doctorId.remove();
          break;
      }
      let result = await user.remove();
      let response = {
        status: true,
        values: result,
      };
      res.status(200).json(response);
    } catch (error) {
      usuarioLogger.error("deleteUser.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
  deleteManyUsers: async (req, res) => {
    try {
      let usernames = req.params.usernames;
      const query = { username: username };
      let user = await Usuario.findOne(query);
      let appointments;
      switch (user.type) {
        case "Admin":
          user.adminId.remove();
          appointments = user.patientId.appointmentsId;
          for (let appointment of appointments) {
            await appointment.remove();
          }
          user.patientId.remove();
          break;
        case "Asociado":
          appointments = user.patientId.appointmentsId;
          for (let appointment of appointments) {
            await appointment.remove();
          }
          user.patientId.remove();
          break;

        default:
          appointments = user.doctorId.appointmentsId;
          for (let appointment of appointments) {
            await appointment.remove();
          }
          user.doctorId.remove();
          break;
      }
      let result = await user.remove();
      let response = {
        status: true,
        values: result,
      };
      res.status(200).json(response);
    } catch (error) {
      usuarioLogger.error("deleteManyUsers.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
  updateUser: async (req, res) => {
    try {
      let data = req.body.data;
      const query = { _id: data.id };
      let user = await Usuario.findOne(query);
      user.name = data.name;
      user.avatarSrc = data.avatarSrc;
      user.phone = data.phone;
      user = await user.save();
      let response = {
        status: true,
        values: user,
      };
      res.status(200).json(response);
    } catch (error) {
      usuarioLogger.error("updateUser.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
  getUser: async (req, res) => {
    //Need tons of work
    try {
      let uid = req.params.uid;
      const query = { _id: uid };
      let user = await Usuario.findOne(query);
      let response = {
        status: true,
        values: user,
      };
      res.status(200).json(response);
    } catch (error) {
      usuarioLogger.error("getUser.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
  getUsers: async (req, res) => {
    //Need tons of work
    try {
      const query = {};
      let users = await Usuario.find(query).select("-password");
      let response = {
        status: true,
        values: users,
      };
      res.status(200).json(response);
    } catch (error) {
      usuarioLogger.error("getUsers.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
};
module.exports = mainController;
