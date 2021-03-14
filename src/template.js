
const generateCards = allEmployees => {
    generateManager = manager => {
        return `<div class="card col-sm-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h5 class="card-title">Manager</h5>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office: ${manager.phone}</p>
        </div>
    </div>
        `;
    }

    generateEngineer = engineer => {
        return `<div class="card col-sm-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
        `;
    }

    generateIntern = intern => {
        return `<div class="card col-sm-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h5 class="card-title">Intern</h5>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
        `;
    }
    
    
    const htmlArray = [];
    console.log(allEmployees);
    htmlArray.push(allEmployees
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
    )
      
    htmlArray.push(allEmployees
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
    )
    
    htmlArray.push(allEmployees
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
    )
    console.log(htmlArray);
    return htmlArray;

}




module.exports = generateCards