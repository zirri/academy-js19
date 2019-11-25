let Grade = require('./server.js');

class Student { 
    constructor(fname, lname, course, grade) {
      this.fname = fname;
      this.lname = lname;
      this.course = course;
      this.grade = new Grade(grade);
    }
    getGrade() {
        return this.grade;
    }

    setGrade(grade){
        this.grade = grade;
    }

    toJSON_(){
        let obj = {fname:this.fname, lname:this.lname, course:this.course, grade:this.grade};
        return(JSON.stringify(obj));
    }
};

let anne = new Student('anne', 'borander', 'math', 10);
console.log(anne.getGrade());
console.log(anne.toJSON_());