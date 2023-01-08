const add = require("./add");
const read = require("./read");

const cmd = process.argv;
const data = read();
const emp = {
  employee: cmd[2],
  role: cmd[3],
  department: cmd[4],
};
add(data, emp);
