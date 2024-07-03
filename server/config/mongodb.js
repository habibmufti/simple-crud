const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://19102170:habibgant3ng@cluster0.u6gabb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const database = client.db("simple-crud")

const UserCollection = database.collection("Users")

// async function run() {
//   try {
//     const database = client.db("sample_mflix");
//     const movies = database.collection("movies");

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: "Back to the Future" };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

module.exports = { client, database, UserCollection };