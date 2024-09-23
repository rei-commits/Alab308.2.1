const initialPlantsPart2 = 100; // starting number of plants for Part 2
const weeksPart2 = 10; // number of weeks
// Calculate plant growth after 10 weeks
let plantCountPart2 = initialPlantsPart2 * Math.pow(2, weeksPart2);
// Calculate required space
const requiredSpace = plantCountPart2 * minSpacePerPlant;
// Calculate additional space needed
const additionalSpaceRequired = requiredSpace - area;
// Calculate new radius if the garden expands
const newArea = area + additionalSpaceRequired;
const newRadius = Math.sqrt(newArea / PI);
console.log(`Additional space required: ${additionalSpaceRequired.toFixed(2)} square meters`);
console.log(`New radius of the expanded garden: ${newRadius.toFixed(2)} meters`);