const Podcast = use('App/Model/Podcast')
const co = use('co')

const isEmpty = obj => Object.keys(obj).length == 0

module.exports = {
    createOrGetExistingPodcast: podcast => {
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
}