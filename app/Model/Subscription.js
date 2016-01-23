'use strict'

const Lucid = use("Lucid")

class Subscription extends Lucid {
    user() {
        return this.belongsTo('App/Model/User')
    }
    
    podcast() {
        return this.belongsTo('App/Model/Podcast')
    }
}

module.exports = Subscription
