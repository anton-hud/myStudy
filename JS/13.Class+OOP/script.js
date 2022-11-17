//ООП

//Создавать объекты можно с помощью сущностей: function и class

//=СОЗДАТЬ ОБЪЕКТ С ПОМОЩЬЮ ФУКНЦИИ: НЕ ИСПОЛЬЗУЕМ, СТАРЫЙ ВАРИАНТ=
function Animal1(name) {
    this.name = name;

    this.getName = function () {
        return this.name;
    }
}

const cat1 = new Animal1('кот');// new -ключевое слово, которое создает объект

console.log(cat1);
console.log(cat1.name);//кот
console.log(cat1.getName());//кот

//=СОЗДАТЬ ОБЪЕКТ С ПОМОЩЬЮ КЛАССА: СОВРЕМЕННЫЙ ВАРИАНТ=
class Animal2 {
    //ГЛАВНАЯ ЦЕЛЬ КОСТРУКТОРА: инициализация начальных значений.
    //КОНСТРУКТОР - это функция которая вызывается в первый же момент. То есть, когда пишем new Animal, то сразу же вызывается конструктор, который инициализирует начальные значения. 
    constructor(name) {
        this.name = name;//в классах name - называются полями, а функции - методами
    }

    getName() {
        return this.name;
    }
}

const cat2 = new Animal2('кот');//создаем объект
const dog = new Animal2('Собака');

console.log(cat2);
console.log(dog);
console.log(cat2.name);//кот
console.log(cat2.getName());//кот


//===========================================================

//4 принципа ООП

// 1. Наследование (inheritance)
// 2. Инкапсуляция
// 3. Полиморфизм
// 4. Абстракция

// 1. НАСЛЕДОВАНИЕ
// Создание дочерних классов на основе базовых

class Plane {
    constructor(type, numberOfPassengers) {
        this.type = type;
        this.numberOfPassengers = numberOfPassengers;
    }

    startFLight() {
        console.log('Полетели!');
    }
}

//Наследование пример: создадим класс на основе класса Plane
class MilitaryPlane extends Plane {
    constructor(type) {
        //КЛЮЧЕВОЕ СЛОВО SUPER
        super(type, 0);//вызывает конструктор родительского класса
        this.numberOfGuns = 0;
    }
    // startFLight() {
    //     console.log('Полетели в атаку!');
    // }
    setNumberOfGuns(numberOfGans) {
        this.numberOfGuns = numberOfGans;
    }

    shoot() {
        console.log('Стреляем!');
    }
}

const plane = new Plane('Пассажирский', 100);
const militaryPlane = new MilitaryPlane('military');

console.log(plane);
plane.startFLight();
militaryPlane.startFLight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log('militaryPlane', militaryPlane);

// instanceof 
// проверяет принадлежил ли объект какому-либо классу

console.log(militaryPlane instanceof MilitaryPlane);//true






// 2. ИНКАПСУЛЯЦИЯ
// Скрытия данных от доступа вне класса либо при наследовании

//public
//private #. Нет доступа у дочерних методов и при вызове через точку

class Developer {
    #salary

    constructor(name, programmingLanguage) {
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000;//хочу сделать приватным полем/методом
    }

    get devSalary() {
        return this.#salary;
    }
    set setSalary(salary) {
        this.#salary = salary;
    }

    startCoding() {
        console.log(`${this.name} начинает писать код!`);
        this.#printProgrammingLanguage();
        console.log(this.#salary);//Не будет ошибки, так как работаем внутри класса
    }

    #printProgrammingLanguage() {
        console.log(`Язык программирования: ${this.programmingLanguage}`)
    }

}

class JuniorDeveloper extends Developer {
    constructor(name, programmingLanguage) {
        super(name, programmingLanguage);
    }
}


const juniorDeveloper = new JuniorDeveloper('Сергей', 'JavaScript');
const developer = new Developer('Антон', 'JavaScript');


console.log(developer);

//Публичные поля и методы
console.log(developer.name);//Антон
console.log(developer.programmingLanguage);//JavaScript
developer.startCoding();
juniorDeveloper.startCoding();

//Приватные поля и методы
// console.log(developer.#salary);//Будет ошибка. Т.к. это приватное поле
// juniorDeveloper.#pringProgrammingLanguage();//Будет ошибка. Так как это private метод


//Получение доступа к приватным полям и методам.

// get - получить значение приватного поля/метода
// set - изменить значение приватного поля/метода

console.log(developer.devSalary);//3000
developer.setSalary = 5000;
console.log(developer.devSalary);//5000


// 3. Полиморфизм
// одно действие, несколько реализаций

//пример. Разные животные могут издавать разные звуки. Поэтому звук в класс Animal нет смысла записывать, будем его записывать как метод в каждом дочернем классе.

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() { }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log('Гав-Гав!');
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log('Иго-го!');
    }
}

// 4. Абстракция

//Использование только тех характеристик объекта, которые с наибольшей точностью представляют его в какой-то определенной системе

// пример. Класс Footballer является абстрактным(описывает обобщенные параметры), а дочерний класс Forward описывает конкретные уже параметры. 

class Footballer {
    constructor(name, club) {
        this.name = name;
        this.club = club;
    }

    shoot() { }
    celebrateGoal() { }
    pass() { }
}

class Forward extends Footballer {
    constructor(name, club) {
        super(name, club);
    }

    shoot() {
        console.log('Очень сильный удар!');
    }
    celebrateGoal() {
        console.log('Даа! Я забил гол!');
    }
    pass() {
        console.log('Средний пас.');
    }
}


//=================================================================

//Статические поля и методы

//Нужны для того что бы создавать поля и методы которые принадлежат именно к классу, а не к каким то его объектам.

//this нельзя использовать в static

//ключевая особенность static: для доступа к этому методу не нужно создавать экземляр класса с помощью new. 

//ключевое слово static

class Car {

    static isCarMetod(car) {//статический метод
        //проверяем является ли car экземпляром класса Car
        return car instanceof Car;
    }

    //установим значения по умолчанию
    static #initialParams = {
        name: 'Audi',
        maxSpeed: 150,
    }

    constructor(name, maxSpeed) {
        this.name = name || Car.#initialParams.name;
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
    }

    drive() {
        console.log(`Машина ${this.name} сейчас в пути.`);
    }
}

const car = new Car('BMW', 200);
console.log(car);

//вызываем статический метод. Без new!
const isCar = Car.isCarMetod(car);
console.log(isCar);//true. То есть обект car является экземляром класса Car. 

const car2 = new Car();
console.log(car2);