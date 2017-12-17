// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err) {
        return console.log('Unable to Connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');
   
    //deleteMany
    // db.collection('Todo').deleteMany({text: 'Eat lunch'}).then((res)=>{
    //     console.log(res);
    // });

    
    //deleteOne
    // db.collection('Todo').deleteOne({text: 'Eat lunch'}).then((res)=> {
    //     console.log(res);
    // });

    //findOneAndDelete

    db.collection('Todo').findOneAndDelete({completed: false}).then((res)=> {
        console.log(res);
    })
    
   
    db.close();
});