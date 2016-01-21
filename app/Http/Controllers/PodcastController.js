'use strict'

const Podcast = use('App/Model/Podcast')
const co = use('co')

function createPodcast(podcast) {
    return co(function*() {
        const new_podcast = new Podcast();
        new_podcast.href = podcast.href;
        return (yield new_podcast.create())[0];
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
        
        const new_podcast_id = yield createPodcast(podcastRequest)
        
        const new_podcast = yield Podcast.find(new_podcast_id);
        
        response.send(new_podcast.attributes)
    }
    * show (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = PodcastController
