import mongoose from "mongoose";

// console.log(process.env.MONGO_DB_URI)
// console.log(process.env.PORT)
const conec = 'mongodb+srv://muhammadanas:MAnas1234@nodeprojects-db.lsqfoxo.mongodb.net/Task-Manager'

const connectDb = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log("COnnected to mongo-Db..."))
        .catch((err) => console.log(err, "Not connected"))
}

export default connectDb 