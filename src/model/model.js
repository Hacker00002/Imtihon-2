const crypto = require("crypto");
const { resolve } = require("path");
const { writeFileSync, readFileSync } = require("fs");

const read = (filename) => {
  const data = readFileSync(resolve("database", filename + ".json"), "utf-8");
  return JSON.parse(data);
};

const write = (filename, data) => {
  writeFileSync(resolve("database", filename + ".json"), JSON.stringify(data));
  return true;
};

const createHashPassword = (password) => {
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  return hash;
};

module.exports = {
  read,
  write,
  createHashPassword,
};
