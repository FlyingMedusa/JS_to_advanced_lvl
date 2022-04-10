// localStorage.setItem('courseName', 'Mega Kurs');
// localStorage.getItem('courseName');
//-------------------------------------------------

// Get last visit date
const lastSavedVisitDate = localStorage.getItem('last-visit');
if (lastSavedVisitDate === null) {
    console.log('You are here for the very first time!');
} else {
    console.log('Nice to see you again! Your last visit: ', lastSavedVisitDate);
}

// Set last visit date
const date = new Date();
const dateString = date.toString();
localStorage.setItem('last-visit', dateString);