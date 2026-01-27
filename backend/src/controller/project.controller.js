import {Project} from '../model/project.model.js';
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";


// Create a new project

const createProject = asyncHandler(async (req, res, next) => {
    try {
        const { title, description, imageUrl, technologies, github, liveUrl, featured } = req.body;
        const project = new Project({ title, description, imageUrl, technologies, github, liveUrl, featured });
        await project.save();
        res
            .status(201)
            .json(new ApiResponse(true, "Project created successfully", project));
    
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }

});

// Get all projects

const getAllProjects = asyncHandler(async (req, res, next) => {
    try {
        const projects = await Project.find().sort({ order: 1, createdAt: -1 });
        res
            .status(200)
            .json(new ApiResponse(true, "Projects retrieved successfully", projects));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

//get featured projects

const getFeaturedProjects = asyncHandler(async (req, res, next) => {
    try {
        const projects = await Project.find({ featured: true }).sort({ order: 1 });
        res
            .status(200)
            .json(new ApiResponse(true, "Featured projects retrieved successfully", projects));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

// get single project 

const getSingleProject = asyncHandler(async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if (!project) {
            throw new ApiError(404, "Project not found");
        }
        res
            .status(200)
            .json(new ApiResponse(true, "Project retrieved successfully", project));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

// update project

const updateProject = asyncHandler(async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const updates = req.body;
        const project = await Project.findByIdAndUpdate(projectId, updates, { new: true });
        if (!project) {
            throw new ApiError(404, "Project not found");
        }
        res
            .status(200)
            .json(new ApiResponse(true, "Project updated successfully", project));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

// Delete project

const deleteProject = asyncHandler(async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findByIdAndDelete(projectId);
        if (!project) {
            throw new ApiError(404, "Project not found");
        }
        res
            .status(200)
            .json(new ApiResponse(true, "Project deleted successfully", project));
    } catch (error) {
        throw new ApiError(500, "Internal Server Error");
    }
});

export { 
    createProject,
    getAllProjects,
    getFeaturedProjects,
    getSingleProject,
    updateProject,
    deleteProject
};
