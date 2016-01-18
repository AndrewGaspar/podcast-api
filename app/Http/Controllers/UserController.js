'use strict'

class UserController {
  
    * index (request, response) {
        response.send(request.request.user);
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = UserController
