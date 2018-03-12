const app = "I don't do much."
function bumpCounter() {
  let counter = 0;
  function addBump() {
    return ++counter;
  }
  function getBumps() {
    return counter;
  }
  return {addBump, getBumps};
}

function createAnimal(animalType) {
  return function diabolic(deadlyDevice) {
    return {animalType, deadlyDevice};
  }
}
const sharkCreator = createAnimal('Shark');
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
const sharkWithFrickinCannon = sharkCreator('Cannon');