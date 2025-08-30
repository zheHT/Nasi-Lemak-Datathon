const express = require('express');
const app = express();

app.listen(3000);

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app
    .route('/:keyword')
    .get((req, res) => {
        const keyword = req.params.keyword;
        console.log(keyword);
    })
    .post((req, res) => {

    })
