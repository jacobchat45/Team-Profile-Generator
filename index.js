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
    promptForNextEmployee()
})

const promptForNextEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "What would you like to do",
            choices: ["Engineer", "Intern", "None"]
        }
    ]).then(response => {
        switch(response.option){
            case "Engineer":
                promptForEngineer();
                break;
            case "Intern":
                promptForIntern();
                break;
            default:
                buildPage();
                break;
            
            
        }
        // if engineer
        //    promptForEngineer
        // else if intern
        //    promptForIntern
        // else
        //    use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([
        //engineer questions
        {
            type: "input",
            name: "engineername",
            message: "What is the name of your engineer?"
        },

        {
            type: "input",
            name: "engineerid",
            message: "What is the id of your engineer?"
        },
        {
            type: "input",
            name: "engineeremail",
            message: "What is the email of your engineer?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the github of your engineer?"
        },
    ]).then(response => {

     const newEngineer = new Engineer(response.engineername, response.engineerid, response.engineeremail, response.engineerGithub)
    // const newManager = new Manager(response.id, etc...)
    teamMembers.push(newEngineer);
        promptForNextEmployee();
    })
}

const promptForIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internname",
            message: "What is the name of your intern?"
        },

        {
            type: "input",
            name: "internid",
            message: "What is the id of your intern?"
        },
        {
            type: "input",
            name: "internemail",
            message: "What is the email of your intern?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does your intern go to?"
        },
        //intern questions
    ]).then(response => {
        const newIntern = new Intern(response.internname, response.internid, response.internemail, response.internSchool)
        // add new intern to employees array
        teamMembers.push(newIntern);
        promptForNextEmployee();
        // promptForNextEmployee

    })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)
// console.log(teamMembers);
let html = render(teamMembers);
fs.writeFileSync(outputPath, html);
console.log(html);
}

