import mongoose, { connect } from "mongoose";
import config from "../../config";

export class DbConnection {
    public static async initConnection() {
        await connect(config.mongoUrl);
    }

    public static async connect(connectionString: string) {
        return mongoose
            .connect(connectionString)
            .then(() => {
                console.log(`Successfully connected`);
            })
            .catch((error) => {
                console.error("Error connecting to database: ", error);
                return process.exit(1);
            });
    }

    public static setAutoReconnect() {
        mongoose.connection.on("disconnected", () => connect(config.mongoUrl));
    }

    public static async disconnect() {
        await mongoose.connection.close();
    }
}
