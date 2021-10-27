const fs = require ('fs');

const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const console_table = require('console.table');




const employee = []


function main(){

const questions = [

    {
        type:'list',
        name:'todo',
        message:`What would you like to do?`,
        choices: ['View all Departments','Add Department','Delete Department','View all roles',
        'Add roles','Delete roles','View all Employees','Add Employee','Delete Employee',
        'View utilized budget','exit','loop'],
    }
];
inquirer.prompt(questions)
.then((answers)=>{ 

    if (answers.todo === "View all Departments"){
        console.log('worked');
        main();
    }
    if (answers.todo === "Add Department" ){
        console.log('2worked');
        main();
    }
    if (answers.todo === "Delete Department"){
        console.log('3worked');
        main();
    }
    if (answers.todo === "View all roles"){
        console.log('4worked');
        main();
    }
    if (answers.todo === "Add roles"){
        console.log('5worked');
        main();
    }
    if (answers.todo === "Delete roles"){
        console.log('6worked');
        main();
    }
    if (answers.todo === "View all Employees"){
        console.log('7worked');
        main();
    }
    if (answers.todo === "Add Employee"){
        console.log('8worked');
        main();
    }
    if (answers.todo === "Delete Employee"){
        console.log('9worked');
        main();
    }
    if (answers.todo === "View utilized budget"){
        console.log('10worked');
        main();
    }
    if (answers.todo === "exit"){
        linkage();
    }
})
// .then((employee) => {
//   console.log(employee);
// })
}

function EngineerQ(){
const newQ = [

    {
        type:'input',
        name:'EngineerName',
        message:`What is the Engineer's name?`,
        default:'Baki Hanma'
    },

    {
        type:'input',
        name:'EngineerId',
        message:'please enter their Employee Id.',
        default:'unknown'
    },
    {
        type:'input',
        name:'EngineerEmail',
        message:'please enter their email adress',
        default:'unknown'
    },
    {
        type:'input',
        name:'GitHub',
        message:'please enter their Github username',
        default:'unknown'
    },
    {
        type:'list',
        name:'employee',
        message:`Would you like to add another person?`,
        choices: ['engineer','intern','exit'],
    }
];
inquirer.prompt(newQ)
.then((answers)=>{ 
    //method 1
    // const engineer = [new Engineer(answers.EngineerName, answers.EngineerId, answers.EngineerEmail, answers.GitHub)]
    // console.log(engineer);
    // page_template(engineer);
    // console.log(page_template);

    //method 2
    const engineer = new Engineer(answers.EngineerName, answers.EngineerId, answers.EngineerEmail, answers.GitHub);
    employee.push(engineer);
    console.log(employee);

 if (answers.employee === "engineer"){
    EngineerQ();
}
if (answers.employee === "intern" ){
    InternQ();
}
if (answers.employee === "exit"){
    linkage();
}
})
}

function InternQ(){
    const questions = [
    
        {
            type:'input',
            name:'InternName',
            message:`What is the team intern's name?`,
            default:'Baki Hanma'
        },
    
        {
            type:'input',
            name:'InternId',
            message:'please enter their Employee Id.',
            default:'unknown'
        },
        {
            type:'input',
            name:'InternEmail',
            message:'please enter their email adress',
            default:'unknown'
        },
        {
            type:'input',
            name:'School',
            message:'please enter their school name',
            default:'unknown'
        },
        {
            type:'list',
            name:'employee',
            message:`Would you like to add another person?`,
            choices: ['engineer','intern','exit'],
        }
    ];
    inquirer.prompt(questions)
    .then((answers)=>{ 

            const intern = new Intern(answers.InternName, answers.InternId, answers.InternEmail, answers.School);
            employee.push(intern);
            console.log(employee);


        if (answers.employee === "engineer"){
            EngineerQ();
        }
        if (answers.employee === "intern" ){
            InternQ();
        }
        if (answers.employee === "exit"){
            linkage();
        }
    });
    }

    function linkage(){
        const questions = [
    
            {
                // type:'confirm',
                name:'exit',
                message: 'Press enter to leave'

            }
        ];
        inquirer.prompt(questions)
        .then(()=>{ 
              console.log("You're out of the employee tracker! Thanks for using it!");
        });
    }


    main();