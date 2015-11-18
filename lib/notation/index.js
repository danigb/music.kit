'use strict'

module.exports = {
  note: {
    toCoord: require('./ntc'),
    fromCoord: require('./ctn')
  },
  interval: {
    toCoord: require('./itc'),
    fromCoord: require('./cti')
  }
}
