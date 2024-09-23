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