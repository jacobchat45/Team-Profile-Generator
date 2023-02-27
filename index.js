const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// this code skeleton was taken from class
let teamMembers = [

]

inquirer.prompt([
    
        {
            type: "input",
            name: "managername",
            message: "What is the name of your manager?"
        },

        {
            type: "input",
            name: "managerid",
            message: "What is the id of your manager?"
        },
        {
            type: "input",
            name: "manageremail",
            message: "What is the email of your manager?"
        },
        {
            type: "input",
            name: "manageroffNumber",
            message: "What is the office number of your manager?"
        },
        // name, id, email, office number

    
]).then(response => {
    const newManager = new Manager(response.managername, response.managerid, response.manageremail, response.manageroffNumber,)
    // const newManager = new Manager(response.id, etc...)
    teamMembers.push(newManager);
    // arrayOfTeamMembers.push(newManager)
    // promptForNexEmployee ()
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        // choice of 3
    }]).then(response => {
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)
}