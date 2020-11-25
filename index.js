const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();
const port = 3000;

//connect to mongodb
const dbURI = 'mongodb+srv://noobdev:onepiecegold@blogs.ita33.mongodb.net/blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//middleware & static files (images, css)
app.use(express.static('public'));

//to use req.body
app.use(express.urlencoded({
    extended: true
}));

app.use(morgan('dev'));

//Blog routers
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
})