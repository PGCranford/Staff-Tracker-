
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
        await this.connection.query("INSERT INTO department SET ?", { department_name })
    }
}


module.exports = ORM;
