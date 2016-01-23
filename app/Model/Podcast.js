'use strict'

const Lucid = use("Lucid")

class Podcast extends Lucid {
    subscriptions() {
        return this.hasMany('App/Model/Subscription')
    }
}

module.exports = Podcast
