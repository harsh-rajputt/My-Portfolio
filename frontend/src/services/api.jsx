import axios from 'axios';

// Get API URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Projects API endpoints
export const projectsAPI = {
  // Get all projects
  getAll: () => api.get('/projects/all'),

  // Get featured projects only
  getFeatured: () => api.get('/projects/featured'),

  // Get single project by ID
  getById: (id) => api.get(`/projects/projects/${id}`),

  // Create new project (admin only)
  create: (data) => api.post('/projects/create', data),

  // Update project (admin only)
  update: (id, data) => api.put(`/projects/update/${id}`, data),

  // Delete project (admin only)
  delete: (id) => api.delete(`/projects/delete/${id}`),
};

// Auth API endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  // register: (data) => api.post('/auth/register', data), // Optional: internal use
};

// Contacts API endpoints
export const contactsAPI = {
  // Send contact message
  create: (data) => api.post('/contacts', data),

  // Get all contacts (admin only)
  getAll: () => api.get('/contacts'),

  // Update contact status (admin only)
  updateStatus: (id, status) => api.patch(`/contacts/${id}/status`, { status }),
};

// Export the axios instance for custom requests
export default api;