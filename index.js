// Write your solution in this file!
const employee = {
    name : "Sam",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }
const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    "streetAddress",
    "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
  }
const destructivelyUpdate = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    "streetAddress",
    "12 Broadway",
);
function  deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};

    delete newObj[key];

    return newObj;

}
const newEmployee = deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
//let deleteFromEmployeeByKey = destructivelyDeleteFromEmployeeByKey(employee, "name");

    
    
