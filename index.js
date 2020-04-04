const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const badge = require('gh-badges');
require(`dotenv`).config();
// let userName = ""

function inquireQuestions() {
  inquirer
    .prompt([{
        type: "input",
        message: "GitHub username",
        name: "username"
      },
      // {
      //   type: "password",
      //   message: "GitHub password",
      //   name: "password"
      // },
      {
        type: "input",
        message: "GitHub username",
        name: "username"
      },
      // {
      //     type: "password",
      //     message: "GitHub password",
      //     name: "password"
      // },
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
        message: "Table of Contents",
        name: "content"
      },
      {
        type: "input",
        message: "Installation",
        name: "installation"
      },
      {
        type: "checkbox",
        message: "Technology Used",
        choices: ["Node.Js", "Express", "JavaScript", "jQuery", "React.js", "React", "GIT", "GitHub", "MongoDB", "MySQL", "Firebase", "Handlebars", "HTML", "CSS", "Bootstrap", "Media Queries", "APIs", "Microsoft Suite", "Heroku", "Command- Line"],
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
        message: "What is your LinkedIn URL?",
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
    ])
    .then(function (response) {
      let userName = response.username

      githubAPICall(userName, response);
    });
}
inquireQuestions()

function githubAPICall(userName, response) {
  console.log(userName);
  const queryUrl = `https://api.github.com/users/` + userName;

  axios
    .get(queryUrl, {
      header: {
        "Authorization": `token ${process.env.GH_TOKEN}`
      }
    })
    .then(function (res) {
      console.log(res.data);


      generateMD(response, res);
    }).catch(function (err) {

      console.log(err);

    });

  //end function
}

function generateMD(response, res) {

  const usersInfo = `
  <img src="${res.data.avatar_url}">
# <h1>${response.project}</h1>   
# <h2> Description
 ${response.description}   
#<h2> Table of Contents
${response.table}  
#<h2> Installation
${response.installation}          
# <h2> Technology Stack          
${response.technology}          
# <h2>Usage
${response.usage}    
#<h2> Contributors
${response.contributors}
# <h2> Contact          
<h5> Name: ${res.data.name}          
<h5> Github [${response.username}](${res.data.html_url})  
<a href= "${response.portfolio}">Portfolio</a>  
<h5>Email: []()          
<a href= "https://www.linkedin.com/in/${response.linkedin}" target="_blank">LinkedIn</a>    
# <h2> License
${response.license}        
#<h2>Tests
${response.tests}`

  // add email and profile picture inside of the contact with the api from github.
  fs.writeFile("README.md", usersInfo, function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
}