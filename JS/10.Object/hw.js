//task 1
console.log('1 TASK');

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

const onlineUsers = users.filter((element) => element.status === 'online');
const usersOnlineNames = onlineUsers.map((item) => item.username).join(', ');
console.log('Сейчас в онлайне следущие пользователи: ', usersOnlineNames);

//task 2
console.log('2 TASK');

const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 4, name: "Виталий" },
    { id: 3, name: "Ангелина" },
];


const giveTalonsInOrder = (patients, orders) => {

    const objectWithIndexes = patients.reduce((acc, curPerson) => {
        acc[curPerson.id] = curPerson;//в аккумулятор записываем текущий элемент
        console.log('Элемент массива: ', curPerson);
        console.log('Аккумулятор: ', acc);
        return acc;
    }, {});
    console.log('объект с объектами сортированный', objectWithIndexes);
    console.log('массив с объектами', patients);

    ////MAP - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
    return orders.map((order) => objectWithIndexes[order]);

};

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);

/* Возвращает массив
[
    { id: 4, name: 'Виталий' },
    { id: 2, name: 'Николай' },
    { id: 1, name: 'Максим' },
    { id: 3, name: 'Ангелина' }
]
*/

//task 3
console.log('3 TASK');

// 1. obj. Объект, с которым будет работать функция
// 2. key. ключ объекта
// 3. action. Действие, которое мы будем совершать над объектом
//action: get, add, delete

const handleObject = (obj, key, action) => {

    switch (action) {
        case 'get':
            return obj[key];
        case 'add':
            obj[key] = "";
            return obj;
        case 'delete':
            delete obj[key];
            return obj;
        default:
            return obj;
    }

}

const student3 = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

const result3 = handleObject(student3, 'programmingLanguage',
    'delete');
console.log('result', result3);

//task 4
console.log('4 TASK');

const student4 = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (student, jobName) => {
    console.log('Поздравляем! У студента ', student.fullName, ' появилась новая работа! Теперь он ', jobName);

    return {
        ...student,
        job: jobName,
    };
}



const updatedStudent = giveJobToStudent(student4, 'веб-разработчик');
console.log('updatedStudent', updatedStudent);
/*
updatedStudent = {
fullName: 'Максим',
experienceInMonths: 12,
stack: ['HTML', 'CSS', 'JavaScript', 'React'],
job: 'веб-разработчик',
}
*/

//task 5
console.log('5 TASK');

const getTotalPriceOfShoppingBag = (shoppingBag) => {
    const shoppingItems = Object.values(shoppingBag);//в shoppingItems копируем массив shoppingBag
    console.log(shoppingItems);

    if (shoppingItems.length === 0) {
        return 0;
    }

    const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
        const { product, quantity } = currentProduct;
        // console.log(product, quantity);//продукт, количество
        const productObject = groceries[product];
        const { price, discount } = productObject
        const priceWithDiscount = productObject.price - (price * discount / 100);
        let totalProductPrice = priceWithDiscount * quantity;
        console.log('аккумулятор', acc, 'totalProductPrice', totalProductPrice)
        return acc + totalProductPrice;
    }, 0);
    return totalPrice.toFixed(2);
};


const groceries = {
    "Orange Juice": {
        price: 1.5,
        discount: 10,
    },
    "Chocolate": {
        price: 2,
        discount: 0,
    },
    // more items...
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
]
const totalPrice =
    getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05

//task 6
console.log('6 TASK');

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: (enemy) => enemy.health -= 10,
}
const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: (hero) => hero.health -= 10,
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = (heroPlayer, enemyPlayer) => {
    while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
        const rand = getRandomNumberInRange(0, 1);
        // console.log(rand);
        if (rand === 1) {
            enemyPlayer.heatHero(heroPlayer);
            if (heroPlayer.health <= 0) {
                break;
            }
        } else {
            heroPlayer.heatEnemy(enemyPlayer);
            if (enemyPlayer.health <= 0) {
                break;
            }
        }
    }

    if (heroPlayer.health <= 0) {
        console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
    } else {
        console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
    }

}

startGame(hero, enemy);

//task 7
console.log('7 TASK');

const getKiller = (suspectInfo, deadPeople) => {
    let killerName = '';

    Object.entries(suspectInfo).forEach((data) => {//преобразуем объект в массив
        const suspectPerson = data[0];//подозреваемое лицо
        const peopleWereSeen = data[1];//кого видел
        const isKiller = deadPeople.every((deadName) =>//проверяем включены ли все значения массива убитых в тех кого видел
            peopleWereSeen.includes(deadName));//проверяем на включенность
        if (isKiller) {//если true
            killerName = suspectPerson;
        }
    })
    return killerName;
};
// console.log(Object.entries(suspectInfo));



const kill1 = getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
); // Убийца James

console.log(kill1);

const kill2 = getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
); // Убийца Megan

console.log(kill2);








//task 8
console.log('8 TASK не делал');


