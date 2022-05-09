const bcrypt = require("bcryptjs");
const environment = require("../../environments/local");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { authLogger } = require("../logging");
const Usuario = require("../models/usuario");
const mainController = {
  comparePass: async (candidatePassword, password) => {
    try {
      return await bcrypt.compare(candidatePassword, password);
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

  updatePassword: async (req, res) => {
    try {
      let username = req.body.username;
      let password = req.body.password;
      let user = await Usuario.findOne({ username: username });
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

  requestPasswordUpdate: async (req, res) => {
    try {
      let username = req.body.username;
      let user = await Usuario.findOne({ username: newUser.username });

      let response = {
        status: true,
        values: user,
        username,
      };
      res.status(200).json(response);
    } catch (error) {
      authLogger.error("requestPasswordUpdate.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },
  recoverPassword: async (req, res) => {
    try {
      let username = req.body.username;
      let user = await Usuario.findOne({ username: newUser.username });

      let response = {
        status: true,
        values: user,
        username,
      };
      res.status(200).json(response);
    } catch (error) {
      authLogger.error("recoverPassword.error", {
        errorMessage: error.message,
      });
      let response = {
        status: "error",
        message: error.message,
      };
      res.status(400).json(response);
    }
  },

  authUser: async (req, res) => {
    try {
      let email = req.body.email;
      let password = req.body.password;
      const query = { email: email };
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

          username: user.username,
          names: user.names,
          lastnames: user.lastnames,
          email: user.email,
          password: user.password,
          address: user.address,
          phone: user.phone,
          birthday: user.birthday,
          type: user.type,
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
