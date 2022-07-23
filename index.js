const inquirer = require('inquirer');
const connection = require('./db/connection.js')
const ORM = require('./lib/ORM.js')


const Staff = {
    VIEW_DEPARTMENT: "View all departments",
    VIEW_ROLES: "View all roles",
    VIEW_EMPLOYEE: "View all employees",
    ADD_DEPARTMENT: "Add a department",
    ADD_EMPLOYEE: "Add and employee",
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
                console.table(await orm.getRoles)
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

            case Staff.ADD_EMPLOYEE: {
                const employeeData = await inquirer.prompt({
                    type: "input",
                    name: "employeeFirstName",
                    message: "What is your employees first name?"
                });
                // {
                //     type: "input",
                //     name: "employeeLastName",
                //     message: "what is your employees last name?",
                // });
                await orm.createEmployee('employeeData', employeeData);
                break;

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




