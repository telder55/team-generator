const inquirer = require('inquirer');
const fs = require('fs')

const questions = () =>
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'project',
                message: 'Enter your company name',

            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose a license.',
                choices: ['No License', 'Apache License 2.0','GNU General Public License v3.0','MIT License', 'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],

            },

        ])
        .then((resData) => {
            //Run Generate Markdown function and pass response data in
            let testData = generatePage(resData)

            //Calling writeToFile
            writeToFile(testData)
        }

        )
    ;

questions();

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
        <title>Team ${data.project}</title>
        <link rel="stylesheet" href="./assets/css/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>
    
    <body class="container">
        <h1>Team ${data.project}</h1>
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