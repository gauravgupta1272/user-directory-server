import mongoose from "mongoose"



const Connection = async (username,password) => {
    
    const URL =`mongodb://${username}:${password}@ac-biyahgs-shard-00-00.xi6ypfo.mongodb.net:27017,ac-biyahgs-shard-00-01.xi6ypfo.mongodb.net:27017,ac-biyahgs-shard-00-02.xi6ypfo.mongodb.net:27017/?ssl=true&replicaSet=atlas-9czasr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected succesfully");
    } catch(error){
        console.log("Error while connecting to the databse", error);
    }
}

export default Connection;