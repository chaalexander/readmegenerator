function generateMD(response, res) {

  return `
  <img align="left" src= "https://img.shields.io/badge/License-${response.license}-green">
  <img align="right" width="100" height="100" src="${res.data.avatar_url}">
  <h1 align= "center">${response.project}</h1> 
  <h2> Table of Contents </h2>
  <li><a href="#description">Description</a></li>  
  <li><a href="#installation">Installation</a></li> 
  <li><a href="#tech">Technology Stack</a></li> 
  <li><a href="#usage">Usage</a></li> 
  <li><a href="#screen">ScreenShots</a></li> 
  <li><a href="#contributors">Contributors</a></li>   
  <li><a href="#contact">Contact</a></li> 
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
  <h5><a href= "mailto:${res.data.email}">${res.data.email}</a></h5>       
  <h5><a href= "https://www.linkedin.com/in/${response.linkedin}">LinkedIn</a></h5>    
  <h2 id="tests">Tests</h2>
  <p>${response.tests}</p>`

};

module.exports = generateMD;