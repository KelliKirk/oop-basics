class Person {
    constructor(name) {
        this.name = name;  // Inimese nimi
        this.dateOfBirth = null;  // Alguses pole sünniaastat määratud
    }

    // Määrab inimese sünniaasta
    setDateOfBirth(year) {
        this.dateOfBirth = year;
    }

    // Tagastab inimese sünniaasta
    getDateOfBirth() {
        return this.dateOfBirth;
    }

    // Arvutab inimese vanuse hetkeseisuga
    age() {
        if (this.dateOfBirth === null) {
            return 'Sünniaasta pole määratud';
        }
        const currentYear = new Date().getFullYear();  // Saame praeguse aasta
        return currentYear - this.dateOfBirth;  // Arvutame vanuse
    }

    // Tagastab inimese nime
    getName() {
        return this.name;
    }

    // Tagastab objekti sõnekuju
    description() {
        return `${this.name} on ${this.age()} aastat vana.`;
    }
}

// Kasutamine:

// Loome isiku objekti
const person = new Person('John Doe');

// Määrame sünniaasta
person.setDateOfBirth(1990);

// Kuvame inimese nime ja vanuse
console.log(person.getName());  // John Doe
console.log(person.getDateOfBirth());  // 1990
console.log(person.age());  // Arvutatud vanus (nt 34)
console.log(person.description());  // "John Doe on 34 aastat vana."
 
module.exports = Person;