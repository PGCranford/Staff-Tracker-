const inquirer = require('inquirer');
const connection = require('./db/connection.js')
const ORM = require('./lib/ORM.js')


const Staff = {
    VIEW_DEPARTMENT: "View all departments",
    VIEW_ROLES: "View all roles",
    VIEW_EMPLOYEE: "View all employees",
    ADD_DEPARTMENT: "Add a department",
    ADD_EMPLOYEE: "Add an employee",
    ADD_ROLE: "Add a role",
    UPDATE_EMPLOYEE: "Update an employee role",

};

const viewStaff = async () => {
    const { staff } = await inquirer.prompt({
        type: "list",
        name: "staff",
        message: "What would you like to do?",
        choices: [...Object.values(Staff), "Exit"]
    });
    return staff;

};

const start = staffInput = async () => {
    const orm = new ORM(await connection);
    let chooseExit = false;
    while (!chooseExit) {
        const staff = await viewStaff();
        switch (staff) {
            case Staff.VIEW_DEPARTMENT: {
                console.table(await orm.getDepartments());
                break;
            }
            case Staff.VIEW_EMPLOYEE: {
                console.table(await orm.getEmployee());
                break;
            }
            case Staff.VIEW_ROLES: {
                console.table(await orm.getRoles())
                break;
            }
            case Staff.ADD_DEPARTMENT: {
                const departmentName = await inquirer.prompt({
                    type: "input",
                    name: "departmentName",
                    message: "What is the name of the new department?",
                });
                await orm.createDepartment(departmentName);
                break;
            }

            case Staff.ADD_ROLE: {

                const { title, salary, department_id } = await inquirer.prompt([
                    {
                        type: "input",
                        name: "title",
                        message: "What is the Name of your new role? ",
                    },
                    {
                        type: "input",
                        name: "salary",
                        message: "What is the salary for this role?"
                    },
                    {
                        type: "list",
                        name: "department",
                        message: "What is the department does this role belong to?",
                        choices: ['Sales', 'Technology', 'Finance', 'Legal']

                    }

                ]);
                await orm.createRole(title, salary, department_id);
                break;
            }
            case Staff.ADD_EMPLOYEE: {

                const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
                    {
                        type: "input",
                        name: "first_name",
                        message: "What is your employees first name?",
                    },
                    {

                        type: "input",
                        name: "last_name",
                        message: "what is your employees last name?",
                    },
                    {
                        type: "list",
                        name: "department_name",
                        message: "What is the employee's department",
                        choices: ['Sales', 'Technology', 'Finance', 'Legal']
                    },
                    {
                        type: "input",
                        name: "manager_id",
                        message: "What is the ID of this employee's manager?"
                    },

                ]);
                await orm.createEmployee(first_name, last_name, role_id, manager_id);
                break;
            }
            case Staff = ALTER_TABLE: {
                const newRole = await inquirer.prompt({

                    type: "input",
                    name: "updatEMP",
                    message: "Enter the ID of the employee would you like to update?",


                });
                await orm.updateEmployee(newRole);
            }
            default: {
                chooseExit = true;
                break;
            }
        }
        // console.log(staff);
    }

};
start();
module.exports = staffInput;




