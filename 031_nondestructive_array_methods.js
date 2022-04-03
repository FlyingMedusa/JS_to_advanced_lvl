const redColors = ["Crimson", "Vermilion", "Cinnabar", "Imperial red"];
const greenColors = ["Evergreen", "Emerald", "Malachite"];

// CONCAT
const redGreenColors = redColors.concat(greenColors, ["Myrtle"]);
console.log(redGreenColors);

/* -------------------------------------------------*/
// SLICE
const fullRedArr = redColors.slice(0);
console.log(fullRedArr);
const favoriteReds = redColors.slice(1,3);
console.log(favoriteReds);

/* -------------------------------------------------*/
// JOIN
const joinedReds = redColors.join(' - ');
console.log(joinedReds);