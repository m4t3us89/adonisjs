"use strict";
const Antl = use("Antl");

class CreateUser {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: "required|unique:users",
      email: "email|required|unique:users",
      password: "required"
    };
  }

  /* get messages () {
    return {
      'email.required': 'Você deve fornecer um endereço de email.',
      'email.unique': 'Já existe um cadastro do e-mail informado.',
      'username.required': 'Você deve fornecer um nome de usuário.',
      'username.unique': 'Já existe um cadastro do username informado.',
      'email.email': 'Você deve fornecer um endereço de email válido.',
      'password.required': 'Você deve fornecer uma senha'
    }
  } */

  get messages() {
    return Antl.list("validation");
  }

  /* Posso comentar, pois vai parar na minha camada de erro (Exceptions/Handler.js)*/
  /*async fails(errorMessages) {
    return this.ctx.response.status(400).send(errorMessages);
  }*/
}

module.exports = CreateUser;
