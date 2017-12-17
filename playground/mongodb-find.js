// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err) {
        return console.log('Unable to Connect to mongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todo').find({
    //     _id: new ObjectID('5a361365365f693cd36ff597')
    // }).toArray().then((docs)=> {
    //     console.log('Todo');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=> {
    //     console.log('Unable to fetch todo', err);
    // });

    db.collection('Todo').find().count().then((count)=> {
        console.log(`Todo count: ${count}`);
    }, (err)=> {
        console.log('Unable to fetch todo', err);
    });


    //db.close();
});