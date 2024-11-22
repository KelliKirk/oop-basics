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

module.exports = School; // Eksportime School klassi