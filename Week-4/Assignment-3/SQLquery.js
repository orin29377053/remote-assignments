const mysql = require("mysql2/promise");
require('dotenv').config();


const sqlSetting = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};

async function checkexist(col, id) {
    const sql = mysql.createPool(sqlSetting);
    const [rows] = await sql.query(
        "SELECT EXISTS (select ?? from `assignment`.`user` where ?? =?) ;",
        [col, col, id]
    );
    // await sql.end();
    const status = Object.values(rows[0])[0];
    return status;
}

async function checkPassword(email, pwd) {
    const sql = mysql.createPool(sqlSetting);
    const [rows] = await sql.query(
        "SELECT EXISTS (select password from `assignment`.`user` where email=?and password =?) ;",
        [email, pwd]
    );
    // await sql.end();
    const status = Object.values(rows[0])[0];
    return status;
}

async function register(email, pwd) {
    const sql = mysql.createPool(sqlSetting);
    const [rows] = await sql.query(
        "INSERT INTO `assignment`.`user`(email, password) VALUES(?,?);",
        [email, pwd]
    );
    return rows;
}

// const test = async function () {
//     await register(sql,"stgtg", "qq");
//     await register(sql,"stgfffffftededededeg", "wwwwwwqq");
//     console.log("qq")
    
// };
// test()
// console.log("test1")
module.exports = {
    checkexist,
    register,
    checkPassword,
};
