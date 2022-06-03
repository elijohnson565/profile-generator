const inquirer = require('inquirer');
const { Create, Copy } = require('../createPage.js');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const createThePage = require('../src/page-template');

function Prompts() {
    this.manager;
    this.intern;
    this.engineer;
}

//Prompt user 

Prompts.prototype.initializePrompts = function() {
    inquirer
    .prompt([{
        type: 'text',
        name: 'name',
        message: 'What is the name of your manager? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter a Valid Response')
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: 'Please enter your id',
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter your email',
    },
    {
        type: 'text',
        name: 'officeNumber',
        message: 'Please enter your office number'
    }
])
    .then(({ name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber);   
        this.EmployeePrompt();
    });
};

Prompts.prototype.EmployeePrompt = function() {
    inquirer
    .prompt({
        type: 'list',
        message: 'Please choose the next role',
        name: 'role',
        choices: ['Engineer', 'Intern', 'Done']
    })
    .then(({ role }) => {
        if (role === 'Engineer') {
            inquirer
            .prompt([
                {
                type: 'text',
                name: 'name',
                message: 'Please enter your engineers name',  
             },
             {
                type: 'text',
                name: 'id',
                message: 'Please enter your engineers id',
             },
             {
                 type: 'text',
                 name: 'email',
                 message: 'Please enter your engineers email',
             },
             {
                type: 'text',
                name: 'github',
                message: 'Please enter your engineers github username'
             },
            ])
            .then(({ name, id, email, github }) => {
                this.engineer = new Engineer(name, id, email, github);
                this.EmployeePrompt();
            })
        } if (role === 'Intern') {
            inquirer
            .prompt([
                {
                type: 'text',
                name: 'name',
                message: 'Please enter your Interns name',  
             },
             {
                type: 'text',
                name: 'id',
                message: 'Please enter your Interns id',
             },
             {
                 type: 'text',
                 name: 'email',
                 message: 'Please enter your Interns email',
             },
             {
                type: 'text',
                name: 'school',
                message: 'Please enter the name of your Interns school'
             },
            ])
            .then(({ name, id, email, school }) => {
                this.intern = new Intern(name, id, email, school);
                this.EmployeePrompt();
        })

       
    } 
    })

}


//export the prompts

module.exports = Prompts;