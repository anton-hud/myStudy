//HW
console.log('HW');

console.log('\n\nTTASK 1');

const separator = '.';

//день.месяц.год
const getDateFormat = (date, separator = '.') => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    const fullDateT1 = day + separator + month + separator + year;
    return fullDateT1;
}


console.log(getDateFormat(new Date()));

const dateT1A = new Date(2005, 4, 20);
const resultTask1A = getDateFormat(dateT1A, '|');
console.log(resultTask1A);


//TASK 2
console.log('\n\nTASK 2');


const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const getDaysBeforeBirthday = (nextBirthdayDate) => {

    const diff = convertMsToDays(((nextBirthdayDate.getTime() - Date.now())));

    return diff;
}

const nowYear = (new Date()).getFullYear() + 1;
const dateB = new Date(nowYear, 5, 30);
console.log(getDaysBeforeBirthday(dateB));






//TASK 3
console.log('\n\nTASK 3');

const conrversionDaysToMs = (days) => days * 24 * 3600 * 1000;

const addDays = (date, days = 1) => {

    return new Date(date.getTime() + conrversionDaysToMs(days));
}

let date3 = new Date();

console.log('before', date3);
console.log('newDate', addDays(date3, 5));


//TASK 4
console.log('\n\nTASK 4 не делал');