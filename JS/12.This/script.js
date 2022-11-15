//THIS

//текущий контекст выполнения кода
//this - тип данных object

console.log(this);//ссылается на глобальный объект. Для Google Chrome это window

const user = {
    name: 'Anton',
    dateOfBirth: 1993,
    getName() {
        // return user.name;//так не правильно, этот способ не универстален
        return this.name;
    },
    //1-й способ указания метода
    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    },
    //2-й способ указания метода
    getAllInfo: function () {
        const age = this.calculateAge();
        console.log(`Имя: ${this.name}, Возраст: ${age}`);
    }
}

console.log(user.getName());//Anton
console.log(user.calculateAge());//Лет
user.getAllInfo();//Лет


// bind, call, apply - помогают нам привязать к функции какой-то определенный контекст. Используются исключитьельно для функций

//то есть меняют реальный this

// call 

const user2 = {
    name: 'Igor',
}

const user2Name = user.getName.call(user2);//указываем новое значение для THIS
const user3Name = user.getName.call(user);//указываем новое значение для THIS

console.log('user2Name', user2Name);//Igor
console.log('user3Name', user3Name);//Anton

//Отличие call, apply, bind

const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strength: 5,
}

const badHero = {
    fullName: 'Joker',
    health: 55,
    strength: 10,
}

function printHeroInfo(extraInfo = '') {
    console.log(this);
    console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`);
}

//ОТЛИЧИЯ

//call, apply сразу вызывают функцию
printHeroInfo.call(badHero, 'Роль: Злодей');//В call параметры передается через запятую
printHeroInfo.apply(badHero, ['Роль:  Чародей']);//А в apply параметры передаются как массив

//bind, не вызывает функцию
const bindedPrintHeroInfo = printHeroInfo.bind(mainHero, 'Роль: Главный герой');//BIND не вызывает функцию, он создает новую функцию с новым контекстом

bindedPrintHeroInfo();


//ПОТЕРЯ КОНТЕКСТА



const userNew = {
    name: 'Anton',
    programmingLanguage: 'JavaScript',
    getName() {
        return this.name;
    },
    //у стрелочной функции нет this
    // getProgrammingLanguage: () => {
    //     return this.programmingLanguage;
    // }
    getProgrammingLanguage: function () {
        return this.programmingLanguage;
    }
}

console.log('getName', userNew.getName());//Антон


//1случай. Когда вызываем функцию без какого либо контекста.

const newGetName = userNew.getName;//this это объект перед точкой. То есть для newGetName THIS потерялся.

//а тут перед newGetName() нет вообще ничего, поэтому будет ссылаться на глобальный объект.
console.log('NewGetName', newGetName());//контекст потерялся из-за того что наша функция вызывается без какого-либо контекста. Наш контекст ссылается на глобальный объект window


console.log('NewGetName', newGetName.call(userNew));//а тут для newGetName мы явно указали THIS.

//2 случай. У стрелочной функции нету THIS. call bind apply не помогут!

console.log(userNew.getProgrammingLanguage());//JavaScript


