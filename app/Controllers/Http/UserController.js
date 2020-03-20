"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

class UserController {
  async index({ request, response }) {
    const users = await User.all();
    return users;
  }

  async store({ request, response }) {
    const user = request.post();
    const newUser = await User.create(user);
    return newUser;
  }
}

module.exports = UserController;
