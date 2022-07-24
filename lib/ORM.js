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

    async createEmployee(first_name, last_name, role_id, manager_id) {
        console.log("orm", first_name, last_name, role_id, manager_id)
        await this.connection.query(" INSERT INTO employee({first_name, last_name, role_id, manager_id}) VALUES(?);",

            first_name, last_name, role_id, manager_id);


    }
}


module.exports = ORM;
