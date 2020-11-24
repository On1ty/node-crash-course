const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for request
const port = 3000;
app.listen(port);


//middleware & static files (images, css)
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [{
        title: 'NoobDev1',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    }, {
        title: 'NoobDev2',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    }, {
        title: 'NoobDev3',
        snippet: 'Lorem ipsum dolor sit amet consectetur'
    }]
    res.render('index', {
        title: 'Home',
        blogs
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create a new Blog'
    });
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
})