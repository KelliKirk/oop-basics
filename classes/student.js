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

// Student klass, mis laiendab Person klassi
class Student extends Person {
    constructor(name) {
        super(name);  // Kutsume ülemklassi konstruktorit
        this.id = null;  // Õpilase ID, alguses null
        this.grades = [];  // Õpilase hinded, alguses tühi massiiv
    }

    // Määrab õpilase ID
    setId(id) {
        if (this.id === null) {  // Kui ID on määramata, määrame selle
            this.id = id;
        }
    }

    // Tagastab õpilase ID
    getId() {
        return this.id;
    }

    // Tagastab õpilase hinded
    getGrades() {
        return this.grades;
    }
    
    // Parandatud addGrade meetod: lisame kursuse ja hinde objekti
    addGrade(course, grade) { 
        const newGrade = {
            course: course,
            grade: grade
        }
        this.grades.push(newGrade);  // Lisame hinde koos kursusega
    }

    // Arvutab õpilase keskmise hinde
    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1;  // Kui hindeid pole, tagastame -1
        }
        const total = this.grades.reduce((sum, gradeObj) => sum + gradeObj.grade, 0);
        return total / this.grades.length;
    }

    // Tagastab õpilase nime koos selgitava tekstiga
    description() {
        return `${this.name} on õpilane, tema keskmine hinne on ${this.getAverageGrade() === -1 ? 'pole hindeid' : this.getAverageGrade()}.`;
    }
}

// Kasutamine:

// Loome õpilase objekti
const student = new Student('Jane Doe');

// Määrame õpilasele ID
student.setId(12345);

// Kuvame õpilase info
console.log(student.getId());  // 12345
console.log(student.getGrades());  // Hinded massiiv
console.log(student.getAverageGrade());  // Keskmine hinne (nt 4.15)
console.log(student.description());  // Jane Doe on õpilane, tema keskmine hinne on 4.15

module.exports = Student;
