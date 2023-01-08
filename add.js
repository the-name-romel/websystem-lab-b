const fs = require("fs");
const read = require("./read");

const add = (data, emp) => {
  const oldData = JSON.parse(data);
  const addTo = [
    ...oldData,
    { Employee: emp.employee, Role: emp.role, Department: emp.department },
  ];
  return fs.writeFileSync("data.txt", JSON.stringify(addTo));
};

module.exports = add;
