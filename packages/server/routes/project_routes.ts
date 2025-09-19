
import express from "express";
import { createProject, getProjects } from "../controllers/projectController.ts";

const project_router = express.Router();

project_router.get('/projects', getProjects)
project_router.post('/projects', createProject)

export default project_router;