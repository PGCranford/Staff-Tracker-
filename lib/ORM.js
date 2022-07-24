// const staffNew = require('../lib/ORM.js');
const inquirer = require('inquirer');

class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    async getDepartments() {
        const [department] = await this.connection.query("SELECT * FROM department");
        return department;

    }

    async getEmployee() {
        const [employee] = await this.connection.query("SELECT * FROM employee")
        return employee;

    }
    async getRoles() {
        const [role] = await this.connection.query("SELECT * FROM roles")
        return role;

    }
    async createDepartment(department_name) {
        await this.connection.query(" INSERT INTO department(department_name) VALUES(?);",
            department_name.departmentName);
    }

    async createEmployee(emp_id, first_name, last_name, role_id, manager_id) {
        await this.connection.query(" INSERT INTO employee(emp_id , first_name , last_name , role_id , manager_id ) VALUES(?);",

            emp_id.empID, first_name.employeeFirstName, last_name.employeeLastName, role_id.roleId, manager_id.empMgrID);


    }
}


module.exports = ORM;
