const mysql = require('mysql2');

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
}

class Roles{
  constructor(){

  }
}

class Employees{

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
}

class SeeBudget{

}



const wow = new Manager("where", 4);

wow.delete();

module.exports = Roles, Employees, 
Department, Manager,SeeBudget;