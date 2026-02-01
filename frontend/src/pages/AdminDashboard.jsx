
import React, { useState, useEffect } from 'react';
import { projectsAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingProject, setEditingProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        technologies: '',
        github: '',
        liveUrl: '',
        featured: false
    });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await projectsAPI.getAll();
            const projectsData = Array.isArray(response?.data)
                ? response.data
                : response?.data?.data || [];
            setProjects(projectsData);
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await projectsAPI.delete(id);
                setProjects(projects.filter(p => p._id !== id));
            } catch (error) {
                console.error('Failed to delete project:', error);
                alert('Failed to delete project');
            }
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setFormData({
            title: project.title,
            description: project.description,
            imageUrl: project.imageUrl,
            technologies: project.technologies.join(', '),
            github: project.github || '',
            liveUrl: project.liveUrl || '',
            featured: project.featured || false
        });
        setIsModalOpen(true);
    };

    const handleCreate = () => {
        setEditingProject(null);
        setFormData({
            title: '',
            description: '',
            imageUrl: '',
            technologies: '',
            github: '',
            liveUrl: '',
            featured: false
        });
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSubmit = {
                ...formData,
                technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t)
            };

            if (editingProject) {
                await projectsAPI.update(editingProject._id, dataToSubmit);
            } else {
                await projectsAPI.create(dataToSubmit);
            }

            setIsModalOpen(false);
            fetchProjects();
        } catch (error) {
            console.error('Operation failed:', error);
            alert('Operation failed: ' + (error.response?.data?.message || error.message));
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    if (loading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <div className="flex gap-4">
                        <button
                            onClick={handleCreate}
                            className="bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Add Project
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <motion.div
                            key={project._id}
                            layout
                            className="bg-white rounded-xl shadow-sm p-6"
                        >
                            <img
                                src={project.imageUrl || project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    onClick={() => handleEdit(project)}
                                    className="text-blue-600 hover:bg-blue-50 px-3 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(project._id)}
                                    className="text-red-600 hover:bg-red-50 px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-6">
                                {editingProject ? 'Edit Project' : 'New Project'}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Title</label>
                                    <input
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Description</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        rows="3"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Image URL</label>
                                    <input
                                        value={formData.imageUrl}
                                        onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
                                    <input
                                        value={formData.technologies}
                                        onChange={e => setFormData({ ...formData, technologies: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">GitHub URL</label>
                                        <input
                                            value={formData.github}
                                            onChange={e => setFormData({ ...formData, github: e.target.value })}
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Live URL</label>
                                        <input
                                            value={formData.liveUrl}
                                            onChange={e => setFormData({ ...formData, liveUrl: e.target.value })}
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.featured}
                                        onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                                        id="featured"
                                    />
                                    <label htmlFor="featured">Featured Project</label>
                                </div>
                                <div className="flex justify-end gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-primary-blue text-white rounded hover:bg-blue-600"
                                    >
                                        Save Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
