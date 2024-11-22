class Course {
    constructor(courseName) {
        this.courseName = courseName;  // Kursuse nimi
        this.grades = new Map();  // Kasutame nüüd Map objekti
    }

    // Funktsioon, mis lisab õpilase hinde kursusele
    addGrade(student, grade) {
        this.grades.set(student, grade);  // Kasutame nüüd Map 'set' meetodit
    }

    // Tagastab õpilaste hinded (Map objekti järgi)
    getGrades() {
        return Array.from(this.grades, ([student, grade]) => ({ student, grade }));  // Muudame Map objekti massiiviks
    }

    // Arvutab kursuse keskmise hinde
    getAverageGrade() {
        if (this.grades.size === 0) {
            return -1;  // Kui hindeid pole, tagastame -1
        }
        const total = Array.from(this.grades.values()).reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.size;  // Kasutame Map size omadust
    }

    // Tagastab kursuse nime
    description() {
        return `Kursus: ${this.courseName}`;
    }
}

class Student {
    constructor(name) {
        this.name = name;  // Õpilase nimi
        this.id = null;  // Õpilase ID, alguses null
    }

    // Määrab õpilase ID
    setId(id) {
        if (this.id === null) {  // Kui ID on määramata, määrame selle
            this.id = id;
        }
    }

    // Tagastab õpilase nime
    getName() {
        return this.name;
    }

    // Tagastab õpilase ID
    getId() {
        return this.id;
    }
}

// Testimine
// Loome õpilased
const student1 = new Student("Jane Doe");
const student2 = new Student("John Smith");
const student3 = new Student("Alice Johnson");

// Määrame õpilastele ID-d
student1.setId(101);
student2.setId(102);
student3.setId(103);

// Loome kursuse
const courseMath = new Course("Mathematics");

// Lisame õpilastele hinded kursusel
courseMath.addGrade(student1, 4.5);  // Õpilane ja hinne
courseMath.addGrade(student2, 3.8);
courseMath.addGrade(student3, 4.2);

// Kuvame kursuse info
console.log(courseMath.description());  // Kursus: Mathematics

// Kuvame kõik hinded
console.log(courseMath.getGrades());  // [{ student: Student { name: 'Jane Doe' }, grade: 4.5 }, { student: Student { name: 'John Smith' }, grade: 3.8 }, { student: Student { name: 'Alice Johnson' }, grade: 4.2 }]

// Kuvame kursuse keskmise hinde
console.log(courseMath.getAverageGrade());  // 4.166666666666667

module.exports = Course;