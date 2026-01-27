import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: { 
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        technologies: [{
            type: String,
            required: true
        }],
        github: {
            type: String,
            required: true
        },
        liveUrl: {
            type: String,
            required: true
        },
        featured: {
            type: Boolean,
            default: false
        },
        order: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }

);

export const Project = mongoose.model("Project", projectSchema);