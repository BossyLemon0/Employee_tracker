const fs = require ('fs');

const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const console_table = require('console.table');
const { Department, Roles, Employees, Manager, SeeBudget } = require ('./lib/query')

const { Console } = require('console');


let department = []
let departmentname = []

let roles = []
let rolesidname =[]
let department_id = []
//a department_id always has to be == to one department.id

let employee = ["none","no manger yet"]
let role_id = []
let ismanager = []
let employeefname =[]

let manager = []
let managerid = []
let budget = []

let depid = 0;
let roleid = 0;
let emprole = 0;
managernum = 0;


function main(){

const questions = [

    {
        type:'list',
        name:'todo',
        message:`What would you like to do?`,
        choices: ['View all Departments','Add Department','Delete Department','View all roles',
        'Add roles','Delete roles','View all Employees','Add Employee','Delete Employee',
        'View all mangers','Add Mangeger','Delete manager','View utilized budget','exit'],
    }
];
inquirer.prompt(questions)
.then((answers)=>{ 

    if (answers.todo === "View all Departments"){
        if(!(department.length == 0)){
            printDep()
        }
        else{
            console.log('no departments yet');
            main();
        }
    }
    if (answers.todo === "Add Department" ){
        console.log('2worked');
        addDep();
    }
    if (answers.todo === "Delete Department"){
        if(!(departmentname.length == 0 || department.length == 0)){
            delDep()
        }
        else{
            console.log('no departments to delete');
            main();
        }
    }
    if (answers.todo === "View all roles"){
        if(!(roles.length == 0)){
            printRoles();
        }else{
            console.log('no roles yet');
            main();
        }
    }
    if (answers.todo === "Add roles"){
        if(!(departmentname.length == 0 || department.length == 0)){
        addRoles()
    }
    else{
        console.log('no departments yet');
        main();
    }
    }
    if (answers.todo === "Delete roles"){
        if(!(roles.length == 0)){
            delRoles();
        }else{
            console.log('no roles to delete yet');
            main();
        }
    }
    if (answers.todo === "View all Employees"){
        if(!(employee.length == 0)){
            printEmployees(); 
        }else{
            console.log('no employees yet');
           main()
        }
    }
    if (answers.todo === "Add Employee"){
        console.log('8worked');
        addEmp();
    }
    if (answers.todo === "Delete Employee"){
        if(!(employee.length == 0)){
            delEmp();
        }else{
            console.log('no employees yet');
            main()
        }
    }
    if (answers.todo === "View all mangers"){
        if(!(manager.length == 0)){
            printMan();
        }else{
            console.log('no managers yet');
            main()
        }
    }
    if (answers.todo === "Add Mangeger"){
        console.log('11worked');
        addMan();
    }
    if (answers.todo === "Delete manager"){
        if(!(manager.length == 0)){
            delMan();
        }else{
            console.log('no managers to delete yet');
            main()
        }
    }
    if (answers.todo === "View utilized budget"){
        if(budget.length == 0){
            printBudget();
        }else{
            console.log('There is no salaries made yet, create some roles and employees to see the utilized budget!');
            main();
        }
    }
    if (answers.todo === "exit"){
        linkage();
    }
})
// .then((employee) => {
//   console.log(employee);
// })
    }


    //function for add and deleting

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

    depid++;
    const dep = {
        id: depid,
        department: answers.department
    }
    department.push(dep);
    departmentname.push(dep.department);
    console.log(`Added ${answers.department} to departments`);
    console.log(departmentname);


    const departadd = new Department(answers.department)
    departadd.add();


    main();
})
    }

function delDep(){
    const questions = [
    
        {
            type:'list',
            name:'department',
            message:`Which department would you like to delete?`,
            choices: departmentname
        },
        {
            type:'confirm',
            name:'delete_confirmation',
            message:'Are you sure you want to delete this department'
        },
 
    ];
    inquirer.prompt(questions)
    .then((answers)=>{ 

        if (answers.delete_confirmation == true ){
            let val = answers.department;
            departmentname = departmentname.filter(function(string){
                return string !== val
            })
            const departdel = new Department(answers.department)
            departdel.delete();

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
            message:'What is the salary for this role?(enter a number)',
        },

        {
            type:'list',
            name:'department',
            message:`Which department does this role belong to?`,
            choices: departmentname,
        }
    ];
    inquirer.prompt(questions)
    .then((answers)=>{ 
        
        let val = answers.department;
        const unid = department.filter(function(string){
            console.log(string)
        if(string.department == val){
             department_id.push(string.id)
             return string.id
        }});

console.log(unid);

        roleid++;
        const rol = {
        id: roleid,
        role: answers.rolename
         }
        rolesidname.push(rol);
        roles.push(answers.rolename);
        console.log(roles);
        console.log(department_id);
        console.log(`Added ${answers.rolename} to the ${answers.department} department`);
        const roleadd = new Roles(answers.rolename, answers.salary, roleid)
        roleadd.add();

        main();
    });
    }

function delRoles(){
        const questions = [
        
            {
                type:'list',
                name:'roles',
                message:`Which role would you like to delete?`,
                choices: roles
            },
            {
                type:'confirm',
                name:'delete_confirmation',
                message:'Are you sure you want to delete this role?'
            },
     
        ];
        inquirer.prompt(questions)
        .then((answers)=>{ 
    
            if (answers.delete_confirmation === true){
                let val = answers.roles;
                roles = roles.filter(function(string){
                    return string !== val
                });
                const roledel = new Department(answers.roles)
                    roledel.delete();
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
                default:'Baki'
            },
        
            {
                type:'input',
                name:'lastname',
                message:`What is the employee's last name?`,
                default:'Hanma'
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

            
            let val = answers.role;
            rolesidname.filter(function(string){
                console.log(string)
            if(string.role == val){
                role_id.push(string.id)
                string.id;
            }});
            
            if( employee[0] == "no manger yet"){
            employee.pop();
            }
            employee.push(`${answers.firstname} ${answers.lastname}`);
            employeefname.push(answers.firstname);
            emprole ++;

            if(!( answers.managers == "none")){
                managernum ++;
               ismanager.push({"name":`${answers.managers}`, "id": managernum })
                }
            if( answers.managers == "none"){
                ismanager.push('none');
                    }

                    let m = answers.managers;
        let manid = ismanager.filter(function(string){
            console.log(string)
        if(string.id == m){
             return string.id
            }
        });
                
            const addanEmp = new Employees(answers.firstname, answers.lastname, role_id[emprole], manid)
            addanEmp.add();
            
            console.log(`Added ${answers.firstname} as a/an ${answers.role} `);
            main();
        });
    }

function delEmp(){
    const questions = [
    
        {
            type:'list',
            name:'emp',
            message:`Which employee would you like to delete?`,
            choices: employeefname
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
            let val = answers.emp;
            employeefname = employeefname.filter(function(string){
                return string !== val
            })
            const empdel = new Employees(answers.emp)
            empdel.delete();
            console.log(`deleted ${answers.roles}`);
        }
        else{
            console.log(`saved ${answers.roles}`);
        }
        main();
    });
}

function addMan(){
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
        if(!(ismanager.length == 0)){
        inquirer.prompt(questions)
        .then((answers)=>{ 

            manager.push(answers.managers);
            const manid = ismanager.filter(function(id){
                if(answers.managers == ismanager.name){
                    return ismanager.id;
                }
            })
            const addaMan = new Manager(answers.manager, manid);
            addaMan.add();
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

function delMan(){
        const questions = [
        
            {
                type:'list',
                name:'roles',
                message:`Which Manager would you like to delete?`,
                choices: manager
            },
            {
                type:'confirm',
                name:'delete_confirmation',
                message:'Are you sure you want to delete this Manager?'
            },
     
        ];
        inquirer.prompt(questions)
        .then((answers)=>{ 
    
            if (answers.delete_confirmation === "yes"){
                let val = answers.roles;
                manager = manager.filter(function(string){
                    return string !== val
                })
                const mandel = new Manager(answers.roles)
                mandel.delete();
                console.log(`deleted ${answers.roles}`);
                 }
            else{
                console.log(`saved ${answers.roles}`);
            }
            main();
        });
    }

    //funtions for printing into the console

function printDep(){
        let dep =  new Department;
        let x = dep.view();
        const questions = [
    
            {
                // type:'confirm',
                name:`
.`,
                message: x

            }
        ];
        inquirer.prompt(questions)
        .then(()=>{ 
            main();
        });
}

function printRoles(){
    let role =  new Roles;
    let x = role.view();
    const questions = [

        {
            // type:'confirm',
            name:`
.`,
            message: x

        }
    ];
    inquirer.prompt(questions)
    .then(()=>{ 
        main();
    });
}

function printEmployees(){
    let emp =  new Employees;
    let x = emp.view();
    const questions = [

        {
            // type:'confirm',
            name:`
.`,
            message: x

        }
    ];
    inquirer.prompt(questions)
    .then(()=>{ 
        main();
    });
}

function printMan(){
    let man =  new Manager;
    let x = man.view();
    const questions = [

        {
            // type:'confirm',
            name:`
.`,
            message: x

        }
    ];
    inquirer.prompt(questions)
    .then(()=>{ 
        main();
    });
}

function printBudget(){
    var x;
            const questions = [
        
            {
                type:'list',
                name:'viewBudget',
                message:`Would you like to see all of the accumulated utilized budget or just one role?`,
                choices: ["Show all", "show one department"]
            }, 
        ];
    const show = [

        {
            // type:'confirm',
            name:`
.`,
            message: x

        }
    ];
    inquirer.prompt(questions)
    .then((questions)=>{ 
        console.log(questions.viewBudget);
        if(questions.viewBudget === "Show all"){
            let budget =  new SeeBudget;
            x = budget.showall();
            inquirer.prompt(show)
            .then(()=>{
                main();
            })

        }else{
            printBudgetone();
            
        }
    });
}
function printBudgetone(){
    var x;
    const qshowone = [
        
        {
            type:'list',
            name:'roles',
            message:`Which role would you like to see?`,
            choices: roles
        }, 
    ];
    const show = [

        {
            // type:'confirm',
            name:`
.`,
            message: x

        }
    ];
    if(!(roles.length == 0)){
    inquirer.prompt(qshowone)
    .then((qshowone)=>{ 
 
        let budget = new SeeBudget;
            x = budget.showone(qshowone.roles);
            inquirer.prompt(show)
            .then(()=>{
                main();
            })
        }
    
    )
    }
    else{
        console.log('no employees yet')
        main();
    }
    
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
