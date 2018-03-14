const app = "I don't do much."

function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps,
  }
}

function createAnimal(animalType) {

  function transformAnimal(deadlyDevice) {
  return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }

  return transformAnimal

}

var sharkCreator = createAnimal('Shark')

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')

var sharkWithFrickinCannon = sharkCreator('Cannon')
