const mysql = require("mysql2/promise");

const sqlSetting = {
    host: "localhost",
    user: "root",
    password: "29377053",
    database: "assignment",
};

async function checkexist(col, id) {
    const sql = mysql.createPool(sqlSetting);
    const [rows] = await sql.query(
        "SELECT EXISTS (select ?? from `assignment`.`user` where ?? =?) ;",
        [col, col, id]
    );
    await sql.end();
    const status = Object.values(rows[0])[0];
    return status;
}

async function checkPassword(email, pwd) {
    const sql = mysql.createPool(sqlSetting);
    const [rows] = await sql.query(
        "SELECT EXISTS (select password from `assignment`.`user` where email=?and password =?) ;",
        [email, pwd]
    );
    await sql.end();
    const status = Object.values(rows[0])[0];
    return status;
}

async function register(email, pwd) {
    const sql = mysql.createPool(sqlSetting);
    const [rows] = await sql.query(
        "INSERT INTO `assignment`.`user`(email, password) VALUES(?,?);",
        [email, pwd]
    );
    await sql.end();
    const status = rows;
    return status;
}

// const test = async function () {
//     const c = await register("s", "qq");
//     console.log(c[0]);
// };
// test()
module.exports = {
    checkexist,
    register,
    checkPassword,
};
