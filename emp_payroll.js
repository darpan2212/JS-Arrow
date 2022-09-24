class EmployeePayroll {

    //properties

    constructor(...param) {
        this.id = param[0];
        this.name = param[1];
        this.salary = param[2];
        this.gender = param[3];
        this.startDate = param[4];
    }

    get name() { return this._name; }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,9}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is incorrect';
        }
    }

    get id() {
        return this._id;
    }

    set id(id) {
        if (id > 0) {
            this._id = id;
        } else {
            throw 'ID must be non zero positive value';
        }
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > 0) {
            this._salary = salary;
        } else {
            throw 'salary must be non zero positive value';
        }
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        if (gender == 'M' || gender == 'F' || gender == 'O') {
            this._gender = gender;
        } else {
            throw 'Gender must only from (M, F, O)';
        }
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {

        let currentDate = new Date();
        if (currentDate.getFullYear() >= startDate.getFullYear() && currentDate.getMonth() >= startDate.getMonth() && currentDate.getDate() > startDate.getDate()) {
            this._startDate = startDate;
        } else {
            throw 'Date must not be future date'
        }
    }

    toString() {
        return "id : " + this._id + ", name : " + this._name + ", salary : " + this._salary + ", gender : " + this._gender + ", startDate : " + this._startDate.toLocaleDateString();
    }
}
let startDate = new Date('2020-01-01');

let emp1 = new EmployeePayroll(1, "Darpan", 1000000, "M", startDate);

console.log(emp1.toString());

try {
    let emp2 = new EmployeePayroll(2, "jack", 900100, "M", startDate);
    console.log(emp2.toString());
} catch (e) {
    console.error(e);
}

console.log("Next implementations");
startDate = new Date('2023-01-01');
try {
    let emp3 = new EmployeePayroll(3, "Mike", 1000000, "M", startDate);
    console.log(emp3.toString());
} catch (e) {
    console.error(e);
}

console.log("Next implementations");