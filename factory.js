

// Empty Reindeer array of objects (Will have coloredReindeerObject's)
coloredReindeer = []

// Generator function to yield each color when instance is called
    const colorsBuilder = function* () {
        const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]     
            for (let counter = 0; counter < colors.length; counter++) {
                yield colors[counter]
        }
    }
        // Instance of generating each reindeer color
        const colorsGenerator = colorsBuilder()

        // Invoke factory function to create reindeer object (deerName next to the function could be replaced by anything that replaces x : coloredReindeerOject(x))
        const coloredReindeerObject = function (deerName) {
            return Object.create(null, {
                "name": { value: deerName, enumerable: true },
                "color": { value: colorsGenerator.next().value, enumerable: true}
            }
        )}
        
        // For Loop through all of the reindeer names and push into coloredReindeer array
        const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
            for (let counter = 0; counter < reindeer.length; counter++) {
                let reindeerObject = coloredReindeerObject(reindeer[counter])
                coloredReindeer.push(reindeerObject)
        }
// Stringify coloredReindeer array an send to local storage
const coloredReindeerString = JSON.stringify(coloredReindeer)
localStorage.setItem("coloredReindeerString", coloredReindeerString)