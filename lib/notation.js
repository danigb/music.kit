'use strict'

module.exports = {
  note: {
    toCoord: require('./notation/ntc'),
    fromCoord: require('./notation/ctn')
  },
  interval: {
    toCoord: require('./notation/itc'),
    fromCoord: require('./notation/cti')
  }
}
