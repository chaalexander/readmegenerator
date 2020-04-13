require(`dotenv`).config();
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require("./generateMD")
const githubAPICall = require("./api")
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
    type: "input",
    message: "What is your full name?",
    name: "name"
  },
  {
    type: "input",
    message: "GitHub username",
    name: "username"
  },
  {
    type: "Input",
    message: "Project Name",
    name: "project"
  },
  {
    type: "input",
    message: "Description",
    name: "description"
  },
  {
    type: "input",
    message: "What do you need to install to make this app to work?",
    name: "installation"
  },
  {
    type: "checkbox",
    message: "Technology Used",
    choices: ["Node.Js", " Express", " JavaScript", " jQuery", " React.js", " React", " GIT", " GitHub", " MongoDB", " MySQL", " Firebase", " Handlebars", " HTML", " CSS", " Bootstrap", " Media Queries", " APIs", " Microsoft Suite", " Heroku", " Command- Line"],
    name: "technology"
  },
  {
    type: "input",
    message: "Usage",
    name: "usage"
  },
  {
    type: "list",
    message: "License",
    choices: ["MIT", "BSD", "ISC", "Apache", "GPL"],
    name: "license"
  },
  {
    type: "input",
    message: "Contributors",
    name: "contributors"
  },
  {
    type: "input",
    message: "What is your LinkedIn username?",
    name: "linkedin"
  },
  {
    type: "input",
    message: "What is your portfolio URL?",
    name: "portfolio"
  },
  {
    type: "input",
    message: "Tests?",
    name: "tests"
  }
]


const inquireQuestions = () => {
  inquirer
    .prompt(questions)
    .then(async response => {
      let userName = response.username
      try {
        const resp = await githubAPICall(userName);
        const usersInfo = generateMD(response, resp);
        console.log(response);

        await writeFileAsync("gen-README.md", usersInfo)
        console.log("Success");
      } catch (err) {
        console.log(err);
      }

    });
}
inquireQuestions()