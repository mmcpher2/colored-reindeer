


// JS for creating the data

const coloredReindeerBuilder = function* () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    // Write a for loop that looks at each reindeer
    for (let counter = 0; counter < reindeer.length; counter++) {
        yield reindeer[counter]
    }
}

        const reindeerGenerator = coloredReindeerBuilder()

        // Invoke factory function to create reindeer object

        const coloredReindeerObject = function (name, color) {
            return Object.create(null, {
                "name": { value: reindeerGenerator.next().value, enumerable: true },
                "color": { value: .next().value, enumerable: true}
            }
        )}
        
        // Put new reindeer object in coloredReindeer array        
        const coloredReindeer = []
        
    // Return coloredReindeer

