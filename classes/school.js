class School {
    constructor(schoolName) {
        this.school = schoolName;
        this.student = []; // tühi massiiv
        this.course = [];
        this.lastStudentId = 0; // Loodud viimane õpilase ID
    }

    // Lisab kursuse kooli
    addCourse(course) {
        const courseExists = this.course.find(existingCourse => existingCourse === course);
        if (!courseExists) {
            this.course.push(course);
            return true; // Kursus lisati edukalt
        } else {
            return false; // Kursus on juba olemas
        }
    }

    // Lisab õpilase kooli
    addStudent(student) {
        // Kontrollime õpilase vanust
        if (student.age < 7 || student.age > 19) {
            return false; // Vanus ei sobi
        }

        // Kontrollime, kas õpilane juba eksisteerib
        const studentExists = this.student.find(existingStudent =>  
            existingStudent.name === student.name && existingStudent.age === student.age
        );

        if (!studentExists) {
            // Määrame õpilasele unikaalse ID
            this.lastStudentId++;
            student.setId(this.lastStudentId);

            // Lisame õpilase massiivi
            this.student.push(student);
            return true;
        } else {
            return false; // Õpilane on juba olemas
        }
    }

    // Lisab õpilase hinde konkreetse kursuse eest
    addStudentGrade(student, course, grade) {
        const studentExists = this.student.find(existingStudent => existingStudent === student);
        const courseExists = this.course.find(existingCourse => existingCourse === course);

        if (studentExists && courseExists) {
            student.addGrade(course, grade);
            course.addGrade(student, grade);
            return true;  // Hinne edukalt lisatud
        } else {
            return false; // Õpilast või kursust ei leitud
        }
    }

    // Tagastab kõik õpilased
    getStudents() {
        return this.student;
    }

    // Tagastab kõik kursused
    getCourses() {
        return this.course;
    }

    // Tagastab õpilased, järjestatuna nende keskmise hinde järgi
    getStudentsOrderedByAverageGrade() {
        return [...this.student].sort((a, b) => {
            const aAverage = a.calculateAverageGrade();
            const bAverage = b.calculateAverageGrade();
            return bAverage - aAverage; // Järjestame kahanevalt
        });
    }
}

// Õpilase klass
class Student {
    constructor(name) {
        this.name = name;
        this.grades = new Map(); // Õpilase hinded (kursus -> hinne)
    }

    setId(id) {
        this.id = id;
    }

    setDateOfBirth(year) {
        const currentYear = new Date().getFullYear();
        this.age = currentYear - year;
    }

    addGrade(course, grade) {
        this.grades.set(course, grade);
    }

    // Arvutame õpilase keskmise hinde
    calculateAverageGrade() {
        const grades = Array.from(this.grades.values());
        return grades.length > 0 
            ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length
            : 0;
    }
}

// Kursuse klass
class Course {
    constructor(courseName) {
        this.courseName = courseName;
        this.grades = new Map(); // Kursuse hinded (õpilane -> hinne)
    }

    addGrade(student, grade) {
        this.grades.set(student, grade);
    }
}

// Testimine
const school = new School("Awesome School");
const student1 = new Student("John Smith");
student1.setDateOfBirth(1995);
const student2 = new Student("Mary Lee");
student2.setDateOfBirth(2000);

school.addStudent(student1);
school.addStudent(student2);

// Me ei saa lisada sama õpilast kaks korda
school.addStudent(student1);
console.log(school.getStudents().length); // 2

const course1 = new Course("Math");
const course2 = new Course("Physics");

school.addCourse(course1);
school.addCourse(course2);

// Me ei saa lisada sama kursust kaks korda
school.addCourse(course1);
console.log(school.getCourses().length); // 2

school.addStudentGrade(student1, course1, 4);
school.addStudentGrade(student1, course2, 5);

module.exports = School;