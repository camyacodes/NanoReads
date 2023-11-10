import mongoose from "mongoose";

export async function connect() {
    try {
        // connect to db url in .env file
        mongoose.connect(process.env.MONGO_URI!);
        // save connection in variable to call on
        const connection = mongoose.connection;

        // once connected log success
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        // catch error in connection
        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit()
        })

    } catch (error) {
        // catch any other error
        console.log("Something went wrong!")
        console.log(error)
    }
}