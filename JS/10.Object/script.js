//Объекты

//Курс Минин

const developer = {
    //key: value, 
    name: 'Maxim',
    job: 'Front-End разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        fraemwork: 'ReactJS'
    }
}

console.log('developer', developer)

//ВЫВОД ЗНАЧЕНИЙ

//1 используется часто
console.log('name', developer.name);
console.log('jobAllInfo', developer.jobAllInfo);
//2 
console.log('name', developer['name']);

//пример использования 2го варианта
const key = 'name';
console.log('name', developer[key]);

//===примеры
console.log('type', developer.jobAllInfo.type);
console.log('framework', developer['jobAllInfo']['type']);


const student = {
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,
};
//ДОБАВЛЕНИЕ 
student.experience = 6;
console.log('student', student);

//УДАЛЕНИЕ
delete student.hasExperienceInReact;
console.log('student', student);

//ИЗМЕНЕНИЕ
student.id = 2;
console.log('student', student);


//ОБЪЕКТ = ССЫЛКА

//8 типов данных
//7 из них примитывы. Не ссылочный тип
//1 из них это объект. Ссылочный тип

const setName = (entity, value) => {//entity- сущность
    if (typeof entity === 'object') {
        entity.name = value;
    } else {
        entity = value;
    }
}

const developerA = {
    name: 'Maxim',
}
let developerName = 'Maxim';

setName(developerA, 'Max');
setName(developerName, 'Max');

console.log('developerA', developerA);//developerA {name: "Max"}
console.log('developerName', developerName);//developerName Maxim НЕ ИЗМЕНИЛОСЬ. Так как объект ссылочный тип. И у него в любой ситуации сохраняется ссылка. А вот в примитивах нет ссылки.

const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy); //true. entityCopy хранит в себе ссылку на entity
console.log({} === {}); //false. Тут разные ссылки
console.log([] === []); //false. Массив это тоже объект.
console.log('hello' === 'hello');//true так как это примитивы


//===================================
//Как итерировать объекты

const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
};

console.log('goodInfo', goodInfo);

//for of перебирает массивы

//for in перебирает объекты. Устаревший способ
for (const key in goodInfo) {
    console.log('key', key);
    const value = goodInfo[key];
    console.log('value', value);
}

//Object.keys - более современный

const keysA = Object.keys(goodInfo);//В keysA запишется массив ключей
console.log('Ключи', keysA);

//Object.values 

const valuesA = Object.values(goodInfo);
console.log('Значения', valuesA);//В valuesA запишется массив значений

//Object.entries - объединяет Object.keys и Object.values 

const entriesA = Object.entries(goodInfo);
console.log('entries', entriesA);//В valuesA запишется массив ключ:значение





//=====================================================


//Работа с ключами объекта
//Ключ может быть 2 типами данных: string или symbol


const user = {
    name: 'Maxim',
    10: '1234',//10 будет преобразовано в строку
    undefined: undefined,
    [false]: false,
};
console.log(Object.keys(user));

//symbol - специальный тип данных, который существует для создания уникальных названий ключей в объектах
//2 одинаковых ключа не может быть, Symbol решает эту проблему

//СОЗДАНИЕ SYMBOL

const id = Symbol('id');
const id2 = Symbol('id2');

const userA = {
    [id]: 1,//либо так 
    [Symbol('id')]: 2,//либо так
    [Symbol('id')]: 3,
    name: 'Maxim',
}
console.log('userA', userA);
console.log(Object.keys(userA));
console.log(userA[id]);//1

//in -проверяет, существуюет ли ключ в объекте

console.log('name' in userA);//true
console.log('prog' in userA);//false
console.log(id in userA);//true
console.log(id2 in userA);//false, тк в объекте его нет



//======================================================
//Объединение несколько ОБЪЕКТОВ в ОДИН

//1 способ. Использовать его, современный
const developerInfo = {
    name: 'Igor',
    age: 25,
    experience: 3,
};

const developerExtraInfo = {
    name: 'Anton',//2 одинаковых ключа name, применится этот ключ.
    height: 180,
    isJunior: false,
};

//...

// const array = [
// ...array1,
// ...array2,
// ];

const developerB = {
    ...developerInfo,
    ...developerExtraInfo,
    hobbi: 3,
};

console.log('developerB', developerB);

//случай с одинаковыми ключами. Применится последний ключ

//2 способ. Object.assign - устаревший способ

const developer2 = Object.assign(developerInfo, developerExtraInfo);
console.log('developer2', developer2);



//=====================================================
//Опциональная цепочка

const developer3 = {
    name: 'Maxim',
    job: 'Front-End разработчик',
    experience: 24,
    // jobAllInfo: {
    //     type: 'Front-End',
    //     //fraemwork: 'ReactJS'
    // }
}


console.log(developer3.jobAllInfo);//undefined
// console.log(developer3.jobAllInfo.fraemwork);//ошибка. 

//существует проблема, когда обращаемся к несуществующим ключам объекта, это вызывает ошибку. Что бы такого не происходило есть 2 метода решения проблемы.

//1 решение - длинное решение. Не рекомендуется.

// if (developer3.jobAllInfo.fraemwork) {//так будет ошибка. Так как developer3.jobAllInfo это undefined. fraemwork у undefined не находит
if (developer3 && developer3.jobAllInfo && developer3.jobAllInfo.fraemwork) {//проблема в том что строка получается очень длинной. Код идет по порядку. Видит true, потом false и переходит к else. 
    console.log('Разработчик уже знает фраемворк');
} else {
    console.log('Разработчик еще не знает фраемворк');
}

//2 решение ОПЦИОНАЛЬНАЯ ЦЕПОЧКА. Рекомендуется

if (developer3?.jobAllInfo?.fraemwork) {//проверяет: существует ли jobAllInfo у 
    // developer3 итд
    console.log('Разработчик уже знает фраемворк');
} else {
    console.log('Разработчик еще не знает фраемворк');
}