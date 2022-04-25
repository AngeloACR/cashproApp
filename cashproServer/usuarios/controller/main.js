const bcrypt = require("bcryptjs");
const environment = require("../../environments/local");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { usuarioLogger, authLogger } = require("../../logging");
const Usuario = require("../models/usuario");
const mainController = {
  comparePass: async (candidatePassword, password) => {
    try {
      return await bcrypt.compare(candidatePassword, password);
    } catch (error) {
      throw error;
    }
  },
  hashPass: async (password) => {
    try {
      let salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw error;
    }
  },
  genToken: (username) => {
    try {
      const hash = crypto.createHash("sha1");

      var hrTime = process.hrtime();
      var validTime = hrTime[0] * 1000000 + hrTime[1] / 1000;

      var toHash = username + validTime.toString() + environment.vSecret;
      hash.update(toHash);
      return [hash.digest("hex"), validTime];
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

  updatePassword: async (newUser, password) => {
    try {
      let user = await Usuario.findOne({ username: newUser.username });
      user.password = await mainController.hashPass(password);
      user = await newUser.save();
      let response = {
        status: true,
        values: user,
      };
    } catch (error) {
      throw error;
    }
  },

  requestPasswordUpdate: async (newUser, password) => {
    try {
      let user = await Usuario.findOne({ username: newUser.username });
      user.password = await mainController.hashPass(password);
      user = await newUser.save();
      let response = {
        status: true,
        values: user,
        username,
      };
    } catch (error) {
      throw error;
    }
  },

  authUser: async (req, res) => {
    try {
      let username = req.body.username;
      let password = req.body.password;
      const query = { username: username };
      let user = await Usuario.findOne(query); //.select('-password')
      if (!user) {
        throw new Error(
          "Usuario o contraseña inválido. Por favor, revisa tus credenciales e intenta de nuevo"
        );
      }
      let isMatch = await mainController.comparePass(password, user.password);

      let auth = {};
      if (isMatch) {
        let payload = {
          _id: user._id,
          type: user.type,
          name: user.name,
          mail: user.mail,
          phone: user.phone,
          avatarSrc: user.avatarSrc,
        };
        const token = jwt.sign(payload, environment.authSecret, {
          expiresIn: 604800, //1 week
        });
        auth = {
          status: true,
          token: token,
        };
        /* sess.isLogged = auth.auth;
        sess.jwToken = auth.token; */
      } else {
        throw new Error(
          "Usuario o contraseña inválido. Por favor, revisa tus credenciales e intenta de nuevo"
        );
      }
      authLogger.info("authUser", {
        data: auth,
      });
      res.status(200).json(auth);
    } catch (error) {
      authLogger.error("authUser.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
  deleteUser: async (username) => {
    try {
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
    } catch (error) {
      throw error;
    }
  },
  deleteManyUsers: async (username) => {
    try {
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
    } catch (error) {
      throw error;
    }
  },
  updateUser: async (data) => {
    try {
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
      return response;
    } catch (error) {
      throw error;
    }
  },
  getUser: async (uid) => {
    //Need tons of work
    try {
      const query = { _id: uid };
      let user = await Usuario.findOne(query);
      let response = {
        status: true,
        values: user,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
  getUsers: async () => {
    //Need tons of work
    try {
      const query = {};
      let users = await Usuario.find(query).select("-password");
      let response = {
        status: true,
        values: users,
      };
      return response;
    } catch (error) {
      throw error;
    }
  },
  setToken: async (username) => {
    try {
      let tokenData = mainController.genToken(username);
      const query = { username: username };
      let user = await Usuario.findOneAndUpdate(query, {
        $set: {
          validEmail: false,
          validToken: tokenData[0],
          validTime: tokenData[1],
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  },
  validateUser: async (username, token) => {
    try {
      const hrTime = process.hrtime();
      const mainControllerTime = hrTime[0] * 1000000 + hrTime[1] / 1000;
      const maxTime = 3600 * 8 * 1000000;
      const query = { username: username };

      let user = await Usuario.findOne(query);

      if (mainControllerTime - user.validTime < maxTime) {
        if (user.validToken == token) {
          user = await Usuario.findOneAndUpdate(query, {
            $set: {
              validEmail: true,
            },
          });
          return user;
        } else {
          throw new Error("Wrong token");
        }
      } else {
        throw new Error("Token has expired");
      }
    } catch (error) {
      throw error;
    }
  },
};
module.exports = mainController;
