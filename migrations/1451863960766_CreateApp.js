
'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
      this.create('users', function(table) {
          table.increments()
          table.string('auth')
          table.string('')
      })
  }

  down () {
  }

}

module.exports = NewSchema
