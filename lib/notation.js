'use strict'

module.exports = {
  note: {
    parse: require('./notation/note.parse'),
    str: require('./notation/note.str')
  },
  interval: {
    parse: require('./notation/interval.parse'),
    str: require('./notation/interval.str')
  }
}
