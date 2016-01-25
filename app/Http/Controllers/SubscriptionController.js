'use strict'

const Subscription = use('App/Model/Subscription')
const PodcastManager = use('App/Data/PodcastManager')
const Podcast = use('App/Model/Podcast')
const User = use('App/Model/User')

class SubscriptionController {
  
    * index (request, response) {
        const user = yield User.find(request.request.user.id);
        
        const subscriptions = yield user.subscriptions().with('podcast').fetch()
        
        const message = subscriptions.toJSON();
        
        response.send(message)
    }
    * create (request, response) {}
    * store (request, response) {
        const user = request.request.user;
        const subscription_request = request.request._body;
        
        let podcast;
        if(subscription_request.href) {
            podcast = yield PodcastManager.createOrGetExistingPodcast(subscription_request);
        } else if(subscription_request.podcast_id) {
            podcast = (yield Podcast.where({ id: subscription_request.podcast_id }).first().fetch()).toJSON()
        }
        
        let subscription = new Subscription();
        subscription.podcast_id = podcast.id;
        subscription.user_id = user.id;
        
        yield subscription.create();        
        
        response.send(subscription.attributes)
    }
    * show (request, response) {}
    * update (request, response) {}
    * destroy (request, response) {}
}

module.exports = SubscriptionController
