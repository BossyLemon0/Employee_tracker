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

class SeeBudget{

}

const wow = new Department("hello","shellohello");

wow.update();

module.exports = Roles, Employees, 
Department, SeeBudget;