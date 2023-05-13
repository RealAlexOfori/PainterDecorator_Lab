const Room = function (areaOfRoom, ableToBePainted = true) {
  this.areaOfRoom = areaOfRoom
  this.startNotPainted = []
  this.ableToBePainted = ableToBePainted
}

module.exports = Room;