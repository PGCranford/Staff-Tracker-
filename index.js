const inquirer = require('inquirer');
const connection = require('./db/connection.js')
const ORM = require('./lib/ORM.js')


const Staff = {
    VIEW_DEPARTMENT: "View all departments",
    VIEW_ROLES: "View all roles",
    VIEW_EMPLOYEE: "View all employees",
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

const start = async () => {
    const orm = new ORM(await connection);
    let chooseExit = false;
    while (!chooseExit) {
        const staff = await viewStaff();
        switch (staff) {
            case viewStaff.VIEW_DEPARTMENT: {
                console.table(await orm.getDepartments());
                break;
            }
            case viewStaff.VIEW_EMPLOYEE: {
                console.table(await orm.getEmployee());
                break;
            }
            case viewStaff.VIEW_ROLES: {
                console.table(await orm.getRoles)
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




