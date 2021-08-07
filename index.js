// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./library/Manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const teamArray = [];



const addManager = () => {
  console.log("");
  console.log("--------ADD MANAGER---------");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager’s name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager’s ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager’s email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager’s office number?",
        name: "officeNumber",
      },
    ])
    .then((managerData) => {
      const { name, id, email, officeNumber } = managerData;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
      addMore();
    });
};

const addEmployee = () => {
  console.log("");
  console.log("--------ADD EMPLOYEE---------");
  inquirer
    .prompt([
      {
        type: "list",
        message: "What role does your employee play",
        choices: ["Engineer", "Intern"],
        name: "addEmployee",
      },
    ])
    .then((response) => {
      if (response.addEmployee === "Engineer") {
        addEngineer();
      } else {
        addIntern();
      }
    });
};

const addMore = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmAddMore",
        message: "Would you like to add another team member?",
        default: false,
      },
    ])
    .then((response) => {
      if (response.confirmAddMore === true) {
        return addEmployee();
      }
    });
};

const addEngineer = () => {
  console.log("");
  console.log("--------ADD ENGINEER---------");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team engineer’s name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer’s ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer’s email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer’s GitHub username?",
        name: "github",
      },
    ])
    .then((EngineerData) => {
      const { name, id, email, github } = EngineerData;
      const engineer = new Engineer(name, id, email, github);

      teamArray.push(engineer);
      console.log(engineer);
      addMore();
    });
};

const addIntern = () => {
  console.log("");
  console.log("--------ADD INTERN---------");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team intern’s name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern’s ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern’s email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern’s school?",
        name: "school",
      },
    ])
    .then((InternData) => {
      const { name, id, email, school } = InternData;
      const intern = new Intern(name, id, email, school);

      teamArray.push(intern);
      console.log(intern);
      addMore();
    });
};

addManager();

const html = render(teamArray);

// write html
fs.writeFile("team.html", html, function (err) {
  if (err) {
    error(err);
  } else {
    console.log("File written!");
  }
});
