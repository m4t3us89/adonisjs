"use strict";

class AuthenticateController {
  async authenticate({ request, response, auth }) {
    const { email, password } = request.all();

    try {
      const token = await auth.attempt(email, password);

      /*Logger.info('request url is %s', request.url())
    
          Logger.info('request details %j', {
            url: request.url()
            // user: auth.user.username()
          })
          return token*/
      return token;
    } catch (err) {
      throw { messages: [{ message: "Password Incorreto." }], status: 400 };
    }
  }
}

module.exports = AuthenticateController;
