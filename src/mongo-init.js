console.log("START MONGO DATABASE");
// mongo-init.js
db = db.getSiblingDB('barakDB');

// Create a user for the 'barakDB' database
db.createUser({
  user: '',
  pwd: '',
  roles: [
    {
      role: 'readWrite',
      db: 'barakDB',
    },
  ],
});