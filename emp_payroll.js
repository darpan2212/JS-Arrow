class EmployeePayroll {

    //properties
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.salary = salary;
        this.name = name;
    }

    get name() { return this._name; }

    set name(name) {
        this._name = name;
    }

    toString() {
        return "id : " + this.id + ", name : " + this._name + ", salary : " + this.salary;
    }
}

let emp = new EmployeePayroll(1, "Darpan", 1000000);

console.log(emp.toString());