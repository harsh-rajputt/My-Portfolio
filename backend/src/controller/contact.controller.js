import { Contact } from "../model/contact.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import nodemailer from "nodemailer";

const createContactMessage = asyncHandler(async (req, res) => {
  const { name, email, message, subject } = req.body;

  if (!name || !email || !subject || !message) {
    throw new ApiError(400, "All fields are required");
  }

  // Save to DB
  const contactMessage = await Contact.create({
    name,
    email,
    subject,
    message,
  });

  // ✅ Send email ONLY if credentials exist
  if (process.env.Email_USER && process.env.Email_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.Email_USER,
          pass: process.env.Email_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.Email_USER,
        to: process.env.Email_USER,
        subject: "New Contact Message",
        text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `,
      });
    } catch (mailError) {
      console.error("Email sending failed:", mailError.message);
      // ❗ DO NOT crash the request
    }
  } else {
    console.warn("Email credentials not provided, skipping email.");
  }

  res.status(201).json(
    new ApiResponse(true, "Message sent successfully", contactMessage)
  );
});

const getAllContactMessages = asyncHandler(async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.status(200).json(
    new ApiResponse(true, "Messages fetched", messages)
  );
});

const updateContactMessageStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const message = await Contact.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  if (!message) {
    throw new ApiError(404, "Message not found");
  }

  res.status(200).json(
    new ApiResponse(true, "Status updated", message)
  );
});

export {
  createContactMessage,
  getAllContactMessages,
  updateContactMessageStatus,
};
