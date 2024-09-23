const PI = 3.1415;
const radius = 5; // meters
const area = PI * radius * radius; // Area of the circular garden
const minSpacePerPlant = 0.8; // square meters
const initialPlants = 20; // starting number of plants
// Calculate maximum capacity of the garden
const maxCapacity = Math.floor(area / minSpacePerPlant); // max number of plants
// Function to predict plant growth
function predictPlantGrowth(weeks) {
    let plantCount = initialPlants * Math.pow(2, weeks); // plants double each week
    if (plantCount > maxCapacity * 0.8) {
        return `After ${weeks} week(s): Prune plants. Current count: ${plantCount}`;
    } else if (plantCount >= maxCapacity * 0.5) {
        return `After ${weeks} week(s): Monitor growth. Current count: ${plantCount}`;
    } else {
        return `After ${weeks} week(s): Plant more plants. Current count: ${plantCount}`;
    }
}
// Results for 1, 2, and 3 weeks
console.log(predictPlantGrowth(1));
console.log(predictPlantGrowth(2));
console.log(predictPlantGrowth(3));


// Part 2

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

//Part 3

try {
    // Calculate required space for 100 plants in original garden
    const requiredSpaceForOriginal = initialPlantsPart2 * minSpacePerPlant;
    // Check if the required space exceeds available space
    if (requiredSpaceForOriginal > area) {
        throw new Error('The space required exceeds the available space in the garden.');
    } else {
        console.log('The initial setup is fine. No error occurred.');
    }
} catch (error) {
    console.error(error.message);
}