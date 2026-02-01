
import app from '../src/app.js';
import connectDB from '../src/db/index.js';
import dotenv from 'dotenv'; // Ensure env vars are loaded

dotenv.config();

// Cache the database connection
let isConnected = false;

const handler = async (req, res) => {
    if (!isConnected) {
        await connectDB();
        isConnected = true;
    }
    return app(req, res);
};

export default handler;
