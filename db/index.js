const mysql = require('mysql');
const Promise = require('bluebird');
const db = require('../database.js');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'classroom'
});

con.connect((err) => {
  if (err) {
    console.log('Cannot connect to database! ', err);
  } else {
    console.log('dbConnect success!');
  }
});

let picker = function(cb) {
  let randomStudent = Math.floor(1 + Math.random() * 35);
  return db.Student.findAll({
    attributes: ['name'],
    where: {
      id: randomStudent
    }
  })
  .then((name) => {
    cb(`${name[0].dataValues.name} please come to the principal's office!`);
  })
};

module.exports.con = con;
module.exports.picker = picker;