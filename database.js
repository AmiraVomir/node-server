const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('classroom', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('Failed to connect to databse. ERROR: ', err);
  });

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  }
});

Student.sync();

// let nameArr = ['Adam Tiller', 'Austin Smith', 'Benjamin Barnett', 'Brian Hampton', 'Carlitos Willis', 'Eliezer Caraballo Jr.', 'Eric Song', 'Haider Syed', 'Hieu Ho', 'Imran Kheraj', 'Ingrid Carlson', 'Jake Orel', 'Jasper Chauvin', 'Jay Barr', 'Jay Smith', 'Jeff Maughan', 'Jesse Beard', 'Jimena Gensollen', 'John Tang', 'Joseph Chauvin', 'Joshua Kim', 'Justin Paoletta', 'LeiLei Ros', 'Marchus Barnes', 'Matt Guidone', 'Matt McGavern', 'Max Ross', 'Michael Albert', 'Michael Griffin', 'Ryan Moniz', 'Sajjan Raj Vaidya', 'Stephen Giardina', 'Tim Adams', 'Zachary Melman', 'Zeke Deckert-Holscher'];


// nameArr.forEach((studentName) => {
//   Student.create({ name: studentName});
// });

exports.Student = Student;