//ДАТА ВРЕМЯ

//объект Date

const date = new Date();//создаем объект с помощью new
console.log('date', date);//текущая дата

//new Date(year,month,date,hours,minutes,seconds,ms)

//0 (январь) до 11 (декабрь)

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000)
console.log('newDate', newDate);

console.log('year', newDate.getFullYear());
console.log('month', newDate.getMonth());
console.log('date', newDate.getDate());

//день недели
//0 (вскрсенье) - 6 (суббота)

console.log('day', newDate.getDay());
if (newDate.getDay() === 4) {
    console.log('Сегодня четверг');
}

newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);

console.log('newDate', newDate);


//РАЗНИЦА ДАТ 

//getTime

const date1 = new Date(2005, 4, 20);
const date2 = new Date(2006, 4, 10);

//количество ms с Jan 1,1970
console.log('date1', date1.getTime());
console.log('date2', date2.getTime());

const difference = date2.getTime() - date1.getTime()
console.log('difference', difference);
console.log('difference', difference / 1000);//перевод в секунды
console.log('difference', difference / 1000 / 60);//перевод в минуты




//ПОСЧИТАЕМ СКОЛЬКО ВЫПОЛНЯЕТСЯ ОПЕРАЦИЯ
const startTime = Date.now();
for (let i = 0; i < 1000000; i += 1) {
    //do something
}
const endTime = Date.now();
console.log('startTime', startTime);
console.log('endTime', endTime);

const difference1 = endTime - startTime;
console.log('difference', difference1);