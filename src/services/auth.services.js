// const User = require("../models/users.models");

// const initModels = require("../models/init-models");
// const db = require("../utils/database");
// const models = initModels(db);
const models = require("../models/index");
/* */

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static async register(user) {
    try {
      const result = await models.users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await models.users.findOne({ where: { email } });
      
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid
          ? { isValid, user }
          : { isValid, message: "Password is not correct" };
      }
      return { isValid: false, message: "User does not exist" };
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await models.users.destroy({ where: { id } })
      return result; 
    } catch (error) {
      throw error;
    }
  }
  static async genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "10m",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
