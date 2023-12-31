
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URL;


const clientDB = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const dbConnection = async () => {

    try {
        await clientDB.connect();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {
        console.log(err)
    }
}

dbConnection();

export default clientDB;