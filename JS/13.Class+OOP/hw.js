//HW

console.log('\n\nHW');

//TASK 1

console.log('\n\nTask 1');

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.technologies = [];
        this.status = 'Junior';
    }

    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }

    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student('Maxim', 20);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Middle');
console.log(student);

//TASK 2

console.log('\n\nTask 2');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person) {
        if (this.age < person.age) {
            console.log(`${this.name} младше, чем ${person.name}`);
        } else {
            console.log(`${this.name} старше, чем ${person.name}`);
        }
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим











console.log('\n\nTask 3');

class Dictionary {

    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        // console.log(this.words[word]);
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
            }
        }
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        Object.values(this.words).forEach(element => {
            console.log(`${element.word} - ${element.description}`);
        });

    }

}

const dictionary = new Dictionary('Толковый словарь');



dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые
// сервисы и сайты или поддерживает и дополняет существующие

console.log('\n\nTask 4 дополнение к 3-й');

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }

    add(word, description, isDifficult) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
                isDifficult: true,
            }
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();
// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.



console.log('\n\nTask 5');

class DeveloperT5 {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }

    code() { }

    learnNewTechnology(technology) {
        this.technologies.push(technology);
    }
}

class JuniorDeveloper5 extends DeveloperT5 {
    constructor(fullName, age) {
        super(fullName, age, 'Junior');
        // this.position = 'Junior';
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

class MiddleDeveloper extends DeveloperT5 {
    constructor(fullName, age) {
        super(fullName, age, 'Middle');
        // this.position = 'Middle';
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

class SeniorDeveloper extends DeveloperT5 {
    constructor(fullName, age) {
        super(fullName, age, 'Senior');
        // this.position = 'Senior';
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

const juniorDeveloper5 = new JuniorDeveloper5('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)

juniorDeveloper5.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

console.log(juniorDeveloper5.fullName, juniorDeveloper5.age, juniorDeveloper5.position); // 'Анастасия', 20, 'Junior' 
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); // 'Максим', 30, 'Senior'



console.log('\n\nTask 6 дополнение к 4');

class DictionaryTask6 {

    #name;
    #words;

    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    set setMainName(newName) {
        this.#name = newName;
    }

    get allWords() {
        return this.#words;
    }

    addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj;
    }

    // set setMainName(name) {
    //     this.#name = name;
    // }


    add(word, description) {
        // console.log(this.words[word]);
        if (!this.words[word]) {
            const newWord = { word, description };
            this.addNewWord(word, newWord);
        }
    }

    remove(word) {
        delete this.#words[word];
    }

    get(word) {
        return this.#words[word];
    }

    showAllWords() {
        Object.values(this.#words).forEach(element => {
            console.log(`${element.word} - ${element.description}`);
        });

    }

}


class HardWordsDictionaryT6 extends DictionaryTask6 {
    constructor(name) {
        super(name);
    }

    add(word, description) {
        if (!this.allWords[word]) {
            // this.allWords[word] = {
            //     word,
            //     description,
            //     isDifficult: true,
            // }
            this.addNewWord(word, {
                word,
                description,
                isDifficult: true,
            });
        }
    }
}


const hardWordsDictionaryT6 = new HardWordsDictionaryT6('Сложные слова');

hardWordsDictionaryT6.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionaryT6.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionaryT6.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionaryT6.remove('неологизм');
hardWordsDictionaryT6.showAllWords();

console.log(hardWordsDictionaryT6.mainName); // Сложные слова
hardWordsDictionaryT6.setMainName = 'Новый Словарь';
console.log(hardWordsDictionaryT6.mainName); // Новый Словарь
console.log(hardWordsDictionaryT6.allWords); // выводит объект в котором есть слова
// дилетант и квант





console.log('\n\nTask 7');

