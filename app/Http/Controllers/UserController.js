'use strict'

class UserController {
  
    * index (request, response) {
        request.send("you are the one")
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = UserController
