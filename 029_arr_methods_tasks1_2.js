/**
 * Używaj w zadaniach metod tablicowych!
 * 1. Wylicz średnią ocen.
 * 2. Następnie wypisz wszystkie oceny min. 4.
 */

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

let gradesSum = 0;
grades.forEach(grade => gradesSum += grade);
const gradesMean = gradesSum / grades.length;
console.log(gradesMean);

grades
    .filter(grade => grade >= 4)
    .forEach(grade => console.log(grade));