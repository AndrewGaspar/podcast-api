'use strict'

class PodcastController {
  
    * index (request, response) {
        response.send("hi")
    }
    * create (request, response) {}
    * store (request, response) {}
    * show (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = PodcastController
