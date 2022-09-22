const MAX_HOUR_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;
const WORK_HOUR = 8;
const PRESENT = 1;
const PART_TIME = 2;

let totalEmpHr = 0;
let totalWorkingDays = 0;

let empDailyWageMap = new Map();
let empWorkingHrMap = new Map();

let empDailyWageArr = new Array();

function calculateDailyWage(empHr) {
    return empHr * WAGE_PER_HOUR;
}

function getWorkingHr(empCheck) {
    switch (empCheck) {
        case PRESENT:
            return WORK_HOUR;

        case PART_TIME:
            return WORK_HOUR / 2;

        default:
            return 0;
    }
}

while (totalEmpHr <= MAX_HOUR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;

    let empCheck = Math.floor(Math.random() * 3);
    let empHr = getWorkingHr(empCheck);
    totalEmpHr += empHr;

    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHr));
    empWorkingHrMap.set(totalWorkingDays, empHr);

    empDailyWageArr.push(
        {
            dayNum: totalWorkingDays,
            workHr: empHr,
            wage: calculateDailyWage(empHr)
        }
    );
}

for ([key, value] of empDailyWageMap) {
    console.log("Day" + key + " : $" + value + " USD");
}
console.log("---------------------------------------------")
for ([key, value] of empWorkingHrMap) {
    console.log("Day" + key + " : " + value + " HOUR");
}

let predicate = (num) => num > 0;

let totalSum = (num1, num2) => num1 + num2;
let totalWage = Array.from(empDailyWageMap.values()).filter(predicate).reduce(totalSum, 0);

console.log("Monthly wage of an employee : $" + totalWage + " USD");

let totalWorkingHr = Array.from(empWorkingHrMap.values()).filter(predicate).reduce(totalSum, 0);
console.log("Employee's total working hour in month : " + totalWorkingHr + " HOUR");

let nonWorkingDays = new Array();
let partTimeWorkingDay = new Array();
let fullTimeWorkingDay = new Array();

empWorkingHrMap.forEach((value, key) => {
    if (value == 8) fullTimeWorkingDay.push(key);
    else if (value == 4) partTimeWorkingDay.push(key);
    else nonWorkingDays.push(key);
});

console.log("Non working days : " + nonWorkingDays);
console.log("Part time working days : " + partTimeWorkingDay);
console.log("Full time working days : " + fullTimeWorkingDay);


console.log("-------------------------------------------------------");

let dailyWageSum = (prev, arrObj) => prev + arrObj.wage;
let workingHrSum = (prev, arrObj) => prev + arrObj.workHr;

let totalWageWithArr = empDailyWageArr.filter((obj) => obj.wage > 0).reduce(dailyWageSum, 0);
console.log("Employee monthly wage (with array) : $" + totalWageWithArr + " USD");

let totalWorkingHrWithArr = empDailyWageArr.filter((obj) => obj.workHr > 0).reduce(workingHrSum, 0);
console.log("Employee's total working hour (with array) : " + totalWorkingHrWithArr + " HOUR");