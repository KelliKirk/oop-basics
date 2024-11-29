const Person = require("./person");

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

    // Tagastab keskmise hinde
    getAverageGrade() {
        if (this.grades.length === 0) return 0; // Kui hindeid pole, tagasta 0
        const total = this.grades.reduce((sum, grade) => sum + grade, 0); // Summa
        return total / this.grades.length; // Keskmine
    }

    // Lisab õpilasele hinde koos kursusega
    addGrade(course, grade) { 
        const newGrade = {
            course: course,
            grade: grade
        }
        this.grades.push(newGrade);  // Lisame hinde koos kursusega
    }

    // Arvutab õpilase keskmise hinde
    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return -1;  // Kui hindeid pole, tagastame -1
        }
        const total = this.grades.reduce((sum, gradeObj) => sum + gradeObj.grade, 0);
        return total / this.grades.length;  // Arvutame keskmise hinde
    }

    // Tagastab õpilase nime koos selgitava tekstiga
    description() {
        return `${this.name} on õpilane, tema keskmine hinne on ${this.calculateAverageGrade() === -1 ? 'pole hindeid' : this.calculateAverageGrade()}.`;
    }
}
 
  module.exports = Student; 