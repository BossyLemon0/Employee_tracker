const fs = require ('fs');

const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const console_table = require('console.table');
const Department = require('./lib/query.js');
const Roles = require('./lib/query.js');
const Employees = require('./lib/query.js');
const Manager = require('./lib/query.js');
const SeeBudget = require('./lib/query.js');

const { Console } = require('console');

let department = []
let roles = []
let employee = []



function main(){

const questions = [

    {
        type:'list',
        name:'todo',
        message:`What would you like to do?`,
        choices: ['View all Departments','Add Department','Delete Department','View all roles',
        'Add roles','Delete roles','View all Employees','Add Employee','Delete Employee',
        'View all mangers','Add Mangeger','Delete manager','View utilized budget','exit','loop'],
    }
];
inquirer.prompt(questions)
.then((answers)=>{ 
    console.log(typeof(answers.todo))

    if (answers.todo === "View all Departments"){
        if(!(department.length == 0)){
            main()
        }else{
            console.log('no departments yet');
            main();
        }
    }
    if (answers.todo === "Add Department" ){
        console.log('2worked');
        addDep();
    }
    if (answers.todo === "Delete Department"){
        console.log('3worked');
        delDep();
    }
    if (answers.todo === "View all roles"){
        if(!(roles.length == 0)){
            main()
        }else{
            console.log('no roles yet');
            main();
        }
    }
    if (answers.todo === "Add roles"){
        console.log('5worked');
        addRoles();
    }
    if (answers.todo === "Delete roles"){
        console.log('6worked');
        delRoles();
    }
    if (answers.todo === "View all Employees"){
        if(!(employee.length == 0)){
            main()
        }else{
            console.log('no employees yet');
            main();
        }
    }
    if (answers.todo === "Add Employee"){
        console.log('8worked');
        addEmp();
    }
    if (answers.todo === "Delete Employee"){
        console.log('9worked');
        delEmp();
    }
    if (answers.todo === "View all mangers"){
        console.log('10worked');
        main();
    }
    if (answers.todo === "Add Mangeger"){
        console.log('11worked');
        addManagers();
    }
    if (answers.todo === "Delete manager"){
        console.log('12worked');
        delManagers();
    }
    if (answers.todo === "View utilized budget"){
        console.log('13worked');
        Budget();
    }
    if (answers.todo === "exit"){
        linkage();
    }
})
// .then((employee) => {
//   console.log(employee);
// })
}

function addDep(){
const newQ = [

    {
        type:'input',
        name:'department',
        message:`What is the name of the department?`,
        default:'Sales'
    },
];
inquirer.prompt(newQ)
.then((answers)=>{ 

    department.push(answers.department);
    main();
})
    }

function delDep(){
    const questions = [
    
        {
            type:'input',
            name:'department',
            message:`Which department would you like to delete?`,
            default:'Baki Hanma'
        },
        {
            type:'confirm',
            name:'delete_confirmation',
            message:'Are you sure you want to delete this department'
        },
 
    ];
    inquirer.prompt(questions)
    .then((answers)=>{ 

        if (answers.delete_confirmation === "yes"){
            console.log(`deleted ${answers.department}`);
        }
        else{
            console.log(`saved ${answers.department}`);
        }
        main();

    });
    }

function addRoles(){
    const questions = [
    
        {
            type:'input',
            name:'rolename',
            message:`What is the name of the role?`,
        },
    
        {
            type:'input',
            name:'salary',
            message:'What is the salary for this role?',
            default:'unknown'
        },

        {
            type:'list',
            name:'department',
            message:`Which department does this role belong to?`,
            choices: department,
        }
    ];
    inquirer.prompt(questions)
    .then((answers)=>{ 

        roles.push(answers.rolename);
        console.log(`Added ${answers.rolename} to the ${answers.department} department`);
        main();
    });
    }

function delRoles(){
        const questions = [
        
            {
                type:'input',
                name:'roles',
                message:`Which role would you like to delete?`,
                default:'Baki Hanma'
            },
            {
                type:'confirm',
                name:'delete_confirmation',
                message:'Are you sure you want to delete this role?'
            },
     
        ];
        inquirer.prompt(questions)
        .then((answers)=>{ 
    
            if (answers.delete_confirmation === "yes"){
                console.log(`deleted ${answers.roles}`);
            }
            else{
                console.log(`saved ${answers.roles}`);
            }
            main();
        });
    }

function addEmp(){
        const questions = [
        
            {
                type:'input',
                name:'firstname',
                message:`What is the employee's first name?`,
                default:'Baki Hanma'
            },
        
            {
                type:'input',
                name:'lastname',
                message:`What is the employee's last name?`,
                default:'unknown'
            },

            {
                type:'list',
                name:'role',
                message:`What is the employee's role?`,
                choices: roles,
            },
            {
                type:'list',
                name:'managers',
                message:`Who is the employee's manager?`,
                choices: employee,
            }
        ];
        inquirer.prompt(questions)
        .then((answers)=>{ 
            
            employee.push(`${answers.firstname} ${answers.lastname}`)
            main();
        });
    }

function delEmp(){
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

function addManagers(){
        const questions = [
        
            {
                type:'list',
                name:'managers',
                message:`Who is the manager?`,
                choices: employee,
            }
        ];
        const questions2 = [
        
            {

                name:'managers',
                message:`No managers yet`,
                
            }
        ];
        if(!(employee.length == 0)){
        inquirer.prompt(questions)
        .then((answers)=>{ 

            main();
        
        })}
        else{
        inquirer.prompt(questions2)
        .then((answers)=>{ 
            console.log('There must be an employee first ');
                main();
            
            })  
        };
    }

function delManagers(){
        const questions = [
        
            {
                type:'input',
                name:'roles',
                message:`Which role would you like to delete?`,
                default:'Baki Hanma'
            },
            {
                type:'confirm',
                name:'delete_confirmation',
                message:'Are you sure you want to delete this role?'
            },
     
        ];
        inquirer.prompt(questions)
        .then((answers)=>{ 
    
            if (answers.delete_confirmation === "yes"){
                console.log(`deleted ${answers.roles}`);
            }
            else{
                console.log(`saved ${answers.roles}`);
            }
            main();
        });
    }

function Budget(){
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