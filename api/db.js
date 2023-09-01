import mysql from "mysql"; 

export const db  = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jordan010623$$",
    database: 'blog',
})