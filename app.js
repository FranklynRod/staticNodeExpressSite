const express = require('express');
const data = require('./data.json');
const {projects} = data;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.set('view engine', 'pug');


// GET Homepage
app.get('/',(req,res) =>{
    res.render('index',  {projects} );
})

//GET about
app.get('/about',(req,res) =>{
    res.render('about');
})

// GET Projects
app.get('/projects/:id',(req,res) =>{
    const projectId = req.params.id
    const foundId = projects.find(({id}) => id === parseInt(projectId))
    res.render('project',{foundId});
})

// Errors

app.listen(3000, () => {
    console.log('Serves Port 3000')
});
