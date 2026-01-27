import {Contact} from '../model/contact.model.js';
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import nodemailer from 'nodemailer';

// Create a new contact message

const createContactMessage = asyncHandler(async (req, res, next) => {
    try {
        const { name, email, message, subject } = req.body;
        const contactMessage = new Contact({ name, email, message, subject });
        await contactMessage.save();
        
        // Send email notification
        if (!process.env.Email_USER || !process.env.Email_PASS) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.Email_USER,
                pass: process.env.Email_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.Email_USER,
            to: process.env.Email_USER,
            subject: "New Contact Message",
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        });
    }else{
         console.warn("Email credentials are not set in environment variables.");
    }
        res
            .status(201)
            .json(new ApiResponse(true, "Contact message created successfully", contactMessage));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

// get all contact messages

const getAllContactMessages = asyncHandler(async (req, res, next) => {
    try {
        const contactMessages = await Contact.find().sort({ createdAt: -1 });
        res
            .status(200)
            .json(new ApiResponse(true, "Contact messages retrieved successfully", contactMessages));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

// update contact message status

const updateContactMessageStatus = asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const contactMessage = await Contact.findByIdAndUpdate(
            id,
            {
                status
            },
            { new: true }
        );
        res
            .status(200)
            .json(new ApiResponse(true, "Contact message status updated successfully", contactMessage));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

export {
    createContactMessage,
    getAllContactMessages,
    updateContactMessageStatus,
};