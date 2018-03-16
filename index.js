const app = "I don't do much."

function bumpCounter(){
  let counter = 0
  function addBump(){
    counter += 1
  }
  function getBumps(){
    return counter
  }
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType){
  function innerFunc(deadlyDevice) {
    return {
      animalType: `${animalType}`,
      deadlyDevice: `${deadlyDevice}`
    }
  }
  return innerFunc
}
let sharkCreator = createAnimal("Shark")
let sharkWithFrickinLaserbeam = createAnimal("Shark")("Laserbeam")
let sharkWithFrickinCannon = createAnimal("Shark")("Cannon")
