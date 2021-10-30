const mysql = require('mysql2');
const cTable = require('console.table');
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'root',
      database: 'employee_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

class Department{
  constructor(department, whatToUp){
    this.department = department
    this.whatToUp = whatToUp
  }
  add(){
    db.query('INSERT INTO `department` (name) VALUES (?)',
    [this.department],
    function(err, results) {
      console.log(results);
    })
    console.log('jelo')
  }

  delete(){
    db.query('DELETE FROM `department` WHERE `name`=(?)',
    [this.department],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  update(){
    db.query('UPDATE `department` SET `name` = (?) WHERE `name` = (?)',
    [this.department, this.whatToUp],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  view(){
    db.query('SELECT *  FROM `department`',
    [],
    function(err, results) {
    
    console.table(results);
    })
  }
}

class Roles{
  constructor(role,salary,depid,oldrole){
    this.role = role
    this.salary = salary
    this.depid = depid
    this.oldrole = oldrole
  }
  add(){
    db.query('INSERT INTO `roles` (title, salary, department_id) VALUES (?,?,?)',
    [this.role, this.salary, this.depid],
    function(err, results) {
      console.log(results);
    })
    console.log('jelo')
  }

  delete(){
    db.query('DELETE FROM `roles` WHERE `title`=(?)',
    [this.role],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  updatetitle(){
    db.query('UPDATE `roles` SET `title` = (?) WHERE `title` = (?)',
    [this.role, this.oldrole],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  updatesalary(){
    db.query('UPDATE `roles` SET `salary` = (?) WHERE `title` = (?)',
    [this.salary, this.role],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  view(){
    db.query('SELECT *  FROM `roles`',
    [],
    function(err, results) {
    
    console.table(results);
    })
  }
}

class Employees{
  constructor(first_name,last_name,role_id,manager_id){
    this.first_name = first_name
    this.last_name = last_name
    this.role_id = role_id
    this.manager_id = manager_id
  }
  add(){
    db.query('INSERT INTO `employee` (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)',
    [this.first_name, this.last_name, this.role_id, this.manager_id],
    function(err, results) {
      console.log(results);
    })
    console.log('jelo')
  }

  delete(){
    db.query('DELETE FROM `employee` WHERE `first_name`=(?)',
    [this.first_name],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  updateRole(){
    db.query('UPDATE `employee` SET `role_id` = (?) WHERE `first_name` = (?)',
    [this.role_id, this.first_name],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  view(){
    db.query(`SELECT employee.id AS id, employee.first_name, employee.last_name, roles.title AS role, 
    department.name AS department , roles.salary AS salary, employee.manager_id AS myManager# FROM employee JOIN roles 
    ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY id;`,
    [],
    function(err, results) {
    
    console.table(results);
    })
  }
}

class Manager{
  constructor(manager, id){
    this.manager = manager
    this.id = id
  }
  add(){
    db.query('INSERT INTO `manager` (manager_full_name, id) VALUES (?,?)',
    [this.manager, this.id],
    function(err, results) {
      console.log(results);
    })
    console.log('jelo')
  }

  delete(){
    db.query('DELETE FROM `manager` WHERE `id`=(?)',
    [this.id],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  update(){
    db.query('UPDATE `manager` SET `manager_full_name` = (?) WHERE `id` = (?)',
    [this.manager, this.id],
    function(err, results) {
      console.log(results);
    })
    console.log()
  }
  view(){
    db.query(`SELECT employee.id AS id, manager.manager_full_name AS Manager FROM employee JOIN roles 
    ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id JOIN manager ON employee.manager_id = manager.id
    ORDER BY id;`,
    [],
    function(err, results) {
    
    console.table(results);
    })
  }
  
}

class SeeBudget{
constructor(department){
  this.department = department
}
  showall(){
    db.query('SELECT SUM(salary) AS total FROM roles JOIN employee ON roles.id = employee.role_id;',
    [],
    function(err, results){
      console.table(results);
    })
  
  }
  showone(){
    db.query('SELECT SUM(salary) AS total FROM roles JOIN employee ON roles.id = employee.role_id WHERE `role_id` = (?);',
    [this.department],
    function(err, results){
      console.table(results);
    })
  }

}



// const wow = new SeeBudget;

// wow.add();
// wow.view();
// wow.delete();
// wow.update();
// wow.showall();
// wow.showone();

module.exports = { Department, Roles, Employees, 
 Manager,SeeBudget };

