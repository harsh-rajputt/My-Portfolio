import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './src/model/user.model.js';

dotenv.config();

const createAdmin = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env");
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');

        const email = 'admin@example.com';
        const password = 'Admin123!';

        let user = await User.findOne({ email });

        if (user) {
            user.password = password;
            user.role = 'admin';
            await user.save();
            console.log('Existing user updated to Admin.');
        } else {
            user = await User.create({
                email,
                password,
                role: 'admin'
            });
            console.log('New Admin user created.');
        }

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

createAdmin();
