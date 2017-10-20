



// JS for manipulating the DOM

document.getElementById("colored-reindeer").innerHTML = `<section style="color: ${reindeerGenerator.next().value}">${reindeerGenerator.next().value}</section>`