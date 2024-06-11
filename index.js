class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getDetails() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

class Student extends User {
  constructor(name, email, studentId) {
    super(name, email);
    this.studentId = studentId;
  }
  
  enroll() {
    console.log(`Student ${this.name} has enrolled.`);
  }
}

class Instructor extends User {
  constructor(name, email, instructorId) {
    super(name, email);
    this.instructorId = instructorId;
  }
  
  assignGrade() {
    console.log(`Instructor ${this.name} assigned a grade.`);
  }
}

// Demonstration
const student1 = new Student("John Doe", "john@example.com", "S12345");
student1.getDetails();
student1.enroll();

const instructor1 = new Instructor("Jane Smith", "jane@example.com", "I98765");
instructor1.getDetails();
instructor1.assignGrade();
