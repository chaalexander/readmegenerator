// write and read files
const fs = require("fs");
// ask question get information from somewhere
const inquirer = require("inquirer");
// ajaxcall
const axios = require("axios");
// badge for the license
const datafire = require("datafire")


function inquireQuestions() {
  inquirer
    .prompt([{
        type: "input",
        message: "GitHub username",
        name: "username"
      },
      {
        type: "password",
        message: "GitHub password",
        name: "password"
      },
      {
        type: "input",
        message: "What is the name of your Project?",
        name: "project"
      },
      {
        type: "input",
        message: "Contributors",
        name: "contributors"
      },
      {
        type: "input",
        message: "Description",
        name: "description"
      },
      {
        type: "checkbox",
        message: "Technology Used",
        choices: ["Node.Js", "Express", "JavaScript", "jQuery", "React.js", "React", "GIT", "GitHub", "MongoDB", "MySQL", "Firebase", "Handlebars", "HTML", "CSS", "Bootstrap", "Media Queries", "APIs", "Microsoft Suite", "Heroku", "Command- Line"],
        name: "technology"
      },

      {
        type: "list",
        message: "License",
        choices: ["MIT", "BSD", "ISC", "Apache", "GPL"],
        name: "license"
      },
      {
        type: "input",
        message: "What is your Linked-in username?",
        name: "linkedin"
      },
      {
        type: "input",
        message: "What is you Portfolio link?",
        name: "portfolio"
      },


    ])
    .then(function (response) {
      // console.log(response);

      const usersInfo = `# <h1>${response.project}</h1>
# <h2>Contributor
<a href= "https://github.com/${response.username}" target="_blank">${response.username} </a>
# <h2> Technology Stack
${response.technology}
# <h2> About 
${response.description}
# <h2> License
${response.license}
# <h2> Contact
<a href= "https://github.com/${response.username}" target="_blank">GitHub</a>
<a href= "${response.portfolio}">Portfolio</a>
<a href= "https://www.linkedin.com/${response.linkedin}" target="_blank">LinkedIn</a>`

      // add email and profile picture inside of the contact with the api from github.
      fs.writeFile("README.md", usersInfo, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success");
      })

    });
  //end function
}
inquireQuestions()

function githubAPICall() {

  const queryUrl = `https://api.github.com/zen`;
  // https://api.github.com/users/${username}/repos?per_page=100

  axios
    .get(queryUrl)
    .then(function (res) {
      // console.log(res.data);



    }).catch(function (err) {
      console.log(err);
    });
  //end function
}

// githubAPICall()