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
    const project= projects.find(({id}) => id === parseInt(projectId))
    res.render('project',{project: project});
})

// 404 Error
app.use((req,res, next) =>{
    const error = new Error('Page Not Found');
    error.status = 404
    error.message = 'Page not found'
    console.log(error);
    
})
// app.get('/project/noroute',(req,res) =>{
//     res.render('index',  {projects} );
// })


app.listen(3000, () => {
    console.log('Serves Port 3000')
});
