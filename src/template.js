
const generateCards = allEmployees => {
    generateManager = manager => {
        return `<div class="card col-sm-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${data.manager}</h5>
            <h5 class="card-title">Manager</h5>
            <p class="card-text">ID: ${data.managerID}</p>
            <p class="card-text">Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></p>
            <p class="card-text">Office: 3</p>
        </div>
    </div>
        `;
    }
    
    
    const htmlArray = [];

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

    return htmlArray;
}




module.exports = generateCards