


// Get string from local storage and reParse back into object for iterating
const allReindeer = JSON.parse(localStorage.getItem("coloredReindeerString"))

// For Loop through new object array to umpack each of the rendeir names and colors
for (i = 0; i < allReindeer.length; i++) {
        eachReindeer = allReindeer[i]

        // InnerHTML inside of the function with += so that we can push each reindeer into html
        document.getElementById("colored-reindeer").innerHTML += 
        
                            // Don't forget to add the color css property so that it actually uses the color
        `
            <section style="color: ${eachReindeer.color}">${eachReindeer.name}</section>
        `
}

