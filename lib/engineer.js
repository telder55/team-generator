const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Super means getting from the parent class
        super(name, id, email);
       
        // key value pairs 
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer