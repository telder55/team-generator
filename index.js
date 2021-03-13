const inquirer = require('inquirer');
const fs = require('fs')
// path helps with navigating file system
const path = require("path")
// requiring files
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const newCards = require("./src/template")

// Direct which folder to go to when creating a new one
const fileOut = path.resolve(__dirname, "dist");
const outPath = path.join(fileOut, "company.html")

const team = [];

const initialQuestions = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'companyName',
                message: 'Enter your company name',
            },
            {
                type: 'input',
                name: 'manager',
                message: "Enter the manager's name",
            },
            {
                type: 'input',
                name: 'managerID',
                message: "Enter the manager's ID number",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Enter the manager's email address",
            },
            {
                type: 'input',
                name: 'managerPhone',
                message: "Enter the manager's phone number",

            },

        ])
        .then((data) => {

            const manager = new Manager(data.manager, data.managerID, data.managerEmail, data.managerPhone)
            // pushing manager details into team array
            team.push(data.companyName)
            team.push(manager)
            console.log(team);
            addNewEmployee();
        }

        )
    ;

initialQuestions();

// Function to ask user if they want to create a new employee or not
function addNewEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Choose a new employee to add or select no',
            choices: ['Manager', 'Engineer', 'Intern', 'No'],
        },

    ])
        .then((data) => {
            if (data.addEmployee === 'Manager') {
                addNewManager();
            } else if (data.addEmployee === 'Engineer') {
                addNewEngineer();
            } else if (data.addEmployee === 'Intern') {
                addNewIntern();
            } else console.log("All done adding folks");
        })
}

const addNewManager = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'manager',
                message: "Enter the manager's name",

            },
            {
                type: 'input',
                name: 'managerID',
                message: "Enter the manager's ID number",

            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Enter the manager's email address",

            },
            {
                type: 'input',
                name: 'managerPhone',
                message: "Enter the manager's phone number",

            },

        ])
        .then((data) => {

            const manager = new Manager(data.manager, data.managerID, data.managerEmail, data.managerPhone)
            // pushing manager details into team array
            team.push(manager)
            console.log(team);
            addNewEmployee();

        }

        )
    ;

const addNewEngineer = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineer',
                message: "Enter the Engineer's name",

            },
            {
                type: 'input',
                name: 'engineerID',
                message: "Enter the Engineer's ID number",

            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Enter the Engineer's email address",

            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Enter the Engineer's Github username",

            },

        ])
        .then((data) => {

            const engineer = new Engineer(data.engineer, data.engineerID, data.engineerEmail, data.engineerGithub)
            // pushing manager details into team array
            team.push(engineer)
            console.log(team);
            addNewEmployee();

        }

        )
    ;

const addNewIntern = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'intern',
                message: "Enter the Intern's name",

            },
            {
                type: 'input',
                name: 'internID',
                message: "Enter the Intern's ID number",

            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Enter the Intern's email address",

            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Enter the Intern's school",

            },

        ])
        .then((data) => {

            const intern = new Intern(data.intern, data.internID, data.internEmail, data.internSchool)
            // pushing manager details into team array
            team.push(intern)
            console.log(team);
            addNewEmployee();

        }

        )
    ;


// Writing HTML File 
function writeToFile(data) {
    fs.writeFile('team.html', data, function (err) {
        if (err) throw err;
        console.log('team.html has been generated :)');
    });
}

// Generate HTML File
function generatePage(data) {
    // Create variables based on license info to pass into template literal 

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team ${data.companyName}</title>
        <link rel="stylesheet" href="./assets/css/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>
    
    <body class="container">
        <h1>Team ${data.companyName}</h1>
        <div class="row">
            
            <div class="card col-sm-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">TJ Elder</h5>
                    <h5 class="card-title">Manager</h5>
                    <p class="card-text">ID: 532</p>
                    <p class="card-text">Email: <a href="mailto:telder55@gmail.com">telder55@gmail.com</a></p>
                    <p class="card-text">Office: 3</p>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
}

