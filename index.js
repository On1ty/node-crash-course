const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog')

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
app.use(morgan('dev'));

/**
 * mongoose and mongo sandbox routes
 */
//INSERT
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog 2',
//         snippet: 'About my new Blog',
//         body: 'More about my new Blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// });

//SELECT
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

//SELECT WHERE
// app.get('/single-blog', (req, res) => {
//     Blog.findById('5fbccb182716542c8870e8f3')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// });

app.get('/', (req, res) => {
    Blog.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('index', {
                title: 'Home',
                blogs: result
            });
        })
        .catch((err) => {
            console.log(err);
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