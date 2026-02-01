
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from './src/model/user.model.js';

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        const adminEmail = process.env.ADMIN_EMAIL || "harsh.admin@example.com";
        const adminPassword = process.env.ADMIN_PASSWORD || "harsh123";

        const existingAdmin = await User.findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log("Admin user already exists");
            process.exit();
        }

        const admin = new User({
            email: adminEmail,
            password: adminPassword,
            role: "admin"
        });

        await admin.save();
        console.log(`Admin user created successfully.`);
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);

        process.exit();
    } catch (error) {
        console.error("Error seeding admin:", error);
        process.exit(1);
    }
};

seedAdmin();
