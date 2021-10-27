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

class AddRoles{

}
class AddEmployees{

}
class AddDepartment{

}
class DeleteRoles{

}
class DeleteEmployees{

}
class DeleteDepartment{
    
}
class SeeBudget{

}

module.exports = AddRoles, AddEmployees, 
AddDepartment, DeleteRoles, DeleteEmployees, 
DeleteDepartment, SeeBudget;