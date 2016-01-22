'use strict'

const Podcast = use('App/Model/Podcast')
const co = use('co')

const isEmpty = obj => Object.keys(obj).length == 0

function createOrGetExistingPodcast(podcast) {
    return co(function*() {
        const existing = (yield Podcast.where({ href: podcast.href }).first().fetch()).toJSON();
        
        if(!isEmpty(existing)) {
            return existing
        }
        
        const new_podcast = new Podcast();
        new_podcast.href = podcast.href;
        yield new_podcast.create();
        return new_podcast.attributes
    });
}

class PodcastController {
  
    * index (request, response) {
        response.send("hi")
    }
    * create (request, response) {
    }
    * store (request, response) {
        const podcastRequest = request.request._body
        
        const new_podcast = yield createOrGetExistingPodcast(podcastRequest)
        
        response.send(new_podcast)
    }
    * show (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = PodcastController
