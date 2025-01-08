```javascript
//Correct usage of $inc operator with upsert option for handling missing documents
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true } );
```