//create variables for npm
const inquirer = require(`inquirer`)
const fs = require(`fs`)

//function that generates markdown file using answers from prompt
const newreadme = ({title, description, installation, usage, license, contribute, github, email}) =>
//template of the read me with user input varibales
`
# ${title}
## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)
- [License](#license)
## Badge
![license](https://img.shields.io/badge/license-${license}-blue)
## Installation
${installation}
## Usage
${usage}
## How to Contribute
${contribute}
## Questions?
Have questions feel free to contact me at?\n 
[Email](mailto:${email})\n
[Github](https://github.com/${github})
## License
${license} - See license file for more information.
`
//Questions adn take user input
const start = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {

        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'project installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the project?'
    },
    {
        type: 'list',
        message: 'What license do you want?',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'ISC', 'BSD3'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'how do people contribute?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address?'
    },
//after getting all the inputs the file is writen and saved
]).then((answers)=>{
    // console.log(answers)
    const mdWrite = newreadme(answers);
    fs.writeFile(`./NewReadme/README.md`, mdWrite, (err)=>{
        err ? console.log(err) : console.log("Your new file is in NewReadme folder")  
    })
})  }

//On load starts app
start();
   