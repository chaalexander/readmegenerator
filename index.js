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
        message: "Project Name",
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
      console.log(response);

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
      console.log(res.data);



    }).catch(function (err) {

      console.log(err);

    });

  //end function
}
// githubAPICall()
// fs.writeFile("repos.txt", JSON.stringify(repos), + '/n', function(err) {

//   if (err) {
//     return console.log(err);
//   }

//   console.log("Success!");

// });
// fs.writeFile('log.txt', JSON.stringify(response), function(err) {
//     if (err) {
//         console.log('error');
//     }
//     else{
//         console.log('success');
//     }
// })   