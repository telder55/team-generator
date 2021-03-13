const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Super means getting from the parent class
        super(name, id, email);
       
        // key value pairs 
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern