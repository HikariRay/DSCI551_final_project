const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'dsci551'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/api/get/1', (req, res) => {
    const sqlInsert = 
    "select BORO_NM as Neighborhood,count(BORO_NM) as Total_Cases from nypd_complaint_data_historic11 group by BORO_NM;";
    db.query(sqlInsert, (err, result) =>{
        console.log(result);
        res.send(result);
    });
});

app.get('/api/get/2', (req, res) => {
    const sqlInsert = 
    "select BORO_NM as Neighborhood, count(LAW_CAT_CD) as violation from nypd_complaint_data_historic11 where LAW_CAT_CD = 'violation' group by BORO_NM;";
    db.query(sqlInsert, (err, result) =>{
        console.log(result);
        res.send(result);
    });
});

app.get('/api/get/3', (req, res) => {
    const sqlInsert = 
    "select BORO_NM as Neighborhood, count(LAW_CAT_CD) as felony from nypd_complaint_data_historic11 where LAW_CAT_CD = 'MISDEMEANOR' group by BORO_NM;";
    db.query(sqlInsert, (err, result) =>{
        console.log(result);
        res.send(result);
    });
});

app.get('/api/get/4', (req, res) => {
    const sqlInsert = 
    "select BORO_NM as Neighborhood, count(LAW_CAT_CD) as mis from nypd_complaint_data_historic11 where LAW_CAT_CD = 'FELONY' group by BORO_NM;";
    db.query(sqlInsert, (err, result) =>{
        console.log(result);
        res.send(result);
    });
});


app.post('/api/insert', (req, res) => {
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    const sqlInsert = "insert into nypd_complaint_data_historic11 (BORO_NM,LAW_CAT_CD) values (?,?);";
    db.query(sqlInsert, [movieName, movieReview], (err, result) =>{
        console.log(result);
    });
});

app.listen(3012, () =>{
    console.log('running on port 3012');
});