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
app.get('/projects/:id',(req,res, next) =>{

    const projectId = req.params.id
    const project= projects.find(({id}) => id === parseInt(projectId))
    if (project){
        res.render('project',{project: project});
    }else{
        const error = new Error("Project you're trying to find doesn't exist");
        error.status = 404;
        next(error);
    };
    

})

// 404 Error
app.use((req,res, next) =>{
    const error = new Error("Oops the page you're trying to visit does not exist");
    error.status = 404;
    console.log(error.message);
    
})
//Global error
app.use((err, req, res, next)=>{
    const error = new Error();
    error.status = err.status || 500;
    error.message = err.message || 'Internal Error';
    console.log(error.message);
})



app.listen(3000, () => {
    console.log('Serves Port 3000')
});
