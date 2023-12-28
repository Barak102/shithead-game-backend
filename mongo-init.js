var conn = new Mongo();

console.log('MONGO SCRIPT IS RUNNING HERE!!!!!!!!!!!!!!!!!!!');
// Use or create the new database
var db = conn.getDB('myDB');

// Create a collection in the new database (optional)
db.createCollection('dummy');
