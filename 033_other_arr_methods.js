const redColors = ["Crimson", "Vermilion", "Cinnabar", "Imperial red", "Burgundy", "Scarlet", "Ruby", "Carnelian"];

// INDEXOF - returns index of a requested element; if not found, returns -1
console.log(redColors.indexOf("Ruby"));
console.log(redColors.indexOf("Green"));
console.log(["Arnold", 22, null, 22].lastIndexOf(22));

// INCLUDES
console.log(redColors.includes("Imperial red"));
console.log(redColors.includes("Blood red"));

// SPLIT
console.log("Cake Youghurt Croissant Pizza Dumplings".split(' '));
console.log("Cake, Youghurt, Croissant, Pizza, Dumplings".split(', '));
console.log("Cake, Youghurt, Croissant, Pizza, Dumplings".split(', ', 3));