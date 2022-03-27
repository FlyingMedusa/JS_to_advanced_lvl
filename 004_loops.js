const myArray = ["pies", "kot", "mysz"];
let i = 0;

while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

for (let j = 0; j < myArray.length; j++) {
    myArray[j] = "Wow! "+ myArray[j];
    console.log(myArray[j]);
}