// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err) {
        return console.log('Unable to Connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todo').findOneAndUpdate({
        _id: new ObjectID('5a3671ffbce62c947927625b')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res)=> {
        console.log(res);
    });

    //db.close();
});