const express = require('express');
const body_parser = require('body-parser');
const port = 5010;
const server = express();
const path = require('path');
const statickPath = path.join(__dirname, 'public/');
server.use(express.static(statickPath));

server.set('view engine', 'ejs');
server.use(body_parser.urlencoded({extended: true}));
let data = [];

server.get('/', (req, res) => {
    res.render('index');
});


server.post('/formData', (req, res) => {
    let newData = {...req.body, id : Math.floor(Math.random() * 10000)};
    data = [...data, newData];
    res.redirect('/view');
});


server.get('/view', (req,res) => {
    res.render('view', {data});
});


server.get('/editData/:id', (req, res) => {
    
    let editData = data.find((person) => {
        return person.id == req.params.id;
    });

    res.render('edit', {editData});
});


server.post('/updateData', (req,res) => {

    let updatedData = data.map((person) => {
        if(person.id == req.body.id)
        {
            return person = req.body;
        }
        else
        {
            return person = person;
        }
    });

    data = updatedData;
    res.redirect('/view');
});


server.get('/deletData/:id', (req, res) => {
    
    let deletData = data.filter((person) => {
        return person.id != req.params.id
    });

    data = deletData;
    res.redirect('/view');
});


server.listen(port, () => {
    console.log('success');
});