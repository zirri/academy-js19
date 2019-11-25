class Grades { 
    constructor(grade) {
      this.grade = grade;
    }
    
    getGrade() {
      return this.grade;
    }

    setGrade(grade){
        this.grade = grade;
    }
};

const grade = new Grades(5);
console.log(grade.getGrade());

module.exports=Grades;