const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
require(`dotenv`).config();


function inquireQuestions() {
  inquirer
    .prompt([{
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
      headers: {
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
<img align="left" src= "https://img.shields.io/badge/License-${response.license}-green">
<img align="right" width="100" height="100" src="${res.data.avatar_url}">
<h1 align= "center">${response.project}</h1> 
<h2> Table of Contents </h2>
<li><a href="#contributors">Contributors</a></li>   
<li><a href="#description">Description</a></li>  
<li><a href="#installation">Installation</a></li> 
<li><a href="#tech">Technology Stack</a></li> 
<li><a href="#usage">Usage</a></li> 
<li><a href="#screen">ScreenShots</a></li> 
<li><a href="#contact">Contact</a></li> 
<li><a href="#license">License</a></li> 
<li><a href="#tests">Tests</a></li> 
<h2 id="description"> Description </h2>
<p>${response.description}</p>   
<h2 id="installation"> Installation </h2>
<p>${response.installation}</p>          
<h2 id="tech"> Technology Stack </h2>          
<p>${response.technology}</p>          
<h2 id="usage"> Usage </h2>
<p>${response.usage}</p>   
<h2 id="screen"> ScreenShoots </h2>
<h2 id="contributors"> Contributors </h2>
<p>${response.contributors}</p> 
<h2 id="contact"> Contact </h2>         
<h5> Name: ${response.name}</h5>       
<h5><a href= "https://github.com/${response.username}">GitHub</a></h5>    
<h5><a href= "${response.portfolio}">Portfolio</a></h5>  
<h5>Email:${res.data.email}</h5>       
<h5><a href= "https://www.linkedin.com/in/${response.linkedin}">LinkedIn</a></h5>    
<h2 id="tests">Tests</h2>
<p>${response.tests}</p>`

  fs.writeFile("README.md", usersInfo, function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });


};