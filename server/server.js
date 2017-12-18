var express= require('express');
var bodyParser=require('body-parser');

var {mongoose} =require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((doc)=> {
        res.send(doc);
    },(err)=> {
        res.status(400).send(err);
    });
});

app.listen(3000, ()=> {
    console.log('Started on port 3000');
});











// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc)=> {
//     console.log('Saved todo', doc);
// }, (err)=> {
//     console.log('Unable to save Todo');
// });

// var otherTodo= new Todo({
//     text:'  Edit this video  '
// });

// otherTodo.save().then((doc)=> {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err)=> {
//     console.log('Unable to save', err);
// });

//User email



// var user=new User({
//     email:'suman@wer.com  '
// });
// user.save().then((doc)=> {
//     console.log('User saved', doc);
// }, (err)=> {
//     console.log('Unable to save user', err);
// });