'use strict'


const PodcastManager = use('App/Data/PodcastManager')

class PodcastController {
  
    * index (request, response) {
        response.send("hi")
    }
    * create (request, response) {
    }
    * store (request, response) {
        const podcastRequest = request.request._body
        
        const new_podcast = yield PodcastManager.createOrGetExistingPodcast(podcastRequest)
        
        response.send(new_podcast)
    }
    * show (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = PodcastController
