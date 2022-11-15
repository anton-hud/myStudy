console.log('\n\nHW');
console.log('\n\nTask 1');











const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        switch (this.level) {
            case 1:
                this.level += 1;
                this.stack.push('CSS');
                return this;
            case 2:
                this.level += 1;
                this.stack.push('JavaScript');
                return this;
            case 3:
                this.level += 1;
                this.stack.push('React');
                return this;
            case 4:
                this.level += 1;
                this.stack.push('NodeJS');
                return this;
            default:
                console.log('Студент выучил все технологии!')
                break;
        }
    }
};


student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

console.log(student);



console.log('\n\nTask 2');

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {

    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

    // let newAnimal = {};
    // newAnimal = this;

    // if (isDomestic) {
    //     newAnimal.isDomestic = true;
    // }

    // console.log(newAnimal);
    return {
        ...this,
        isDomestic,
    };
}

console.log(makeDomestic.call(dog, true));
console.log(makeDomestic.apply(bird, [false]));
// const bindMakedomestic = makeDomestic.bind(bird, true);
// console.log(bindMakedomestic());
console.log(makeDomestic.bind(bird, true)());




console.log('\n\nTask 3');

const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: function () {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};
const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack.bind(footballer)();
score.call(footballer, 'Сиииии');
substitute.apply(footballer, ['Paulo Dibala']);







console.log('\n\nTask 4');


const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        const attackerValues = Object.values(this);
        const defenderValues = Object.values(defenderObject);
        let chancesCounter = 0;

        attackerValues.forEach((value, index) => {
            if (value > defenderValues[index] && typeof value === 'number') {
                chancesCounter += 1;
            }
        });

        return [chancesCounter, defenderValues.length];
    },
    improveArmy() {
        Object.entries(this).forEach((item) => {
            const key = item[0];
            const value = item[1];
            if (typeof value === 'number') {
                this[key] = value + 5;
            }
        });
    },
    attack(defender) {
        const chancesValues = this.checkChancesToWin(defender);
        console.log('chancesValues', chancesValues);
        const ourArmyChances = chancesValues[0];
        const seventyPercentChances = Math.round(chancesValues[1] * 70 / 100)
        console.log('ourArmyChances', ourArmyChances);
        console.log('seventyPercentChances', seventyPercentChances);
        if (ourArmyChances < seventyPercentChances) {
            console.log(`Наши шансы равны ${ourArmyChances}/${chancesValues[1]}. Необходимо укрепление!`);
            this.improveArmy();
        } else {
            console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }

        console.log(this);
    }
}
const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!