const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, phone) {
        // Super means getting from the parent class
        super(name, id, email);
       
        // key value pairs 
        this.phone = phone;
    }

    getOfficeNumber(){
        return this.phone;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager