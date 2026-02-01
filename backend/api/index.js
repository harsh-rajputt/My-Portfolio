
import app from '../src/app.js';
import connectDB from '../src/db/index.js';
import dotenv from 'dotenv'; // Ensure env vars are loaded

dotenv.config();

// Cache the database connection
let isConnected = false;

const handler = async (req, res) => {
    // Debugging logs
    console.log("Incoming Request:", req.url);

    if (!process.env.MONGODB_URI) {
        console.error("CRITICAL ERROR: MONGODB_URI is undefined!");
        return res.status(500).json({ error: "Server Configuration Error: Database URI missing" });
    }

    if (!isConnected) {
        try {
            await connectDB();
            isConnected = true;
        } catch (error) {
            console.error("Database connection failed inside handler:", error);
            return res.status(500).json({ error: "Database Connection Failed", details: error.message });
        }
    }
    return app(req, res);
};

export default handler;
