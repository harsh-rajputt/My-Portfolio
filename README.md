# MERN Stack Portfolio

A modern, full-stack portfolio application built with MongoDB, Express, React, and Node.js, featuring a cyberpunk-inspired design with smooth animations and responsive layout.

## Features

### Frontend
- **Modern React 18** with React Router for navigation
- **Framer Motion** for smooth, performant animations
- **Responsive Design** that works on all devices
- **Cyberpunk Aesthetic** with custom fonts (Audiowide & Crimson Pro)
- **Custom Cursor Effect** for enhanced interactivity
- **Dynamic Project Showcase** with filterable portfolio items
- **Contact Form** with form validation

### Backend
- **RESTful API** built with Express.js
- **MongoDB** database with Mongoose ODM
- **Contact Form Handler** with email notifications (Nodemailer)
- **CRUD Operations** for projects management
- **Error Handling** middleware
- **CORS** enabled for cross-origin requests

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Framer Motion
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- dotenv
- CORS

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development

# Email Configuration (optional)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

4. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the client directory (optional):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The app will run on `http://localhost:3000`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contacts
- `POST /api/contacts` - Create contact message
- `GET /api/contacts` - Get all contacts
- `PATCH /api/contacts/:id/status` - Update contact status

## Project Structure

```
mern-portfolio/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navigation.js
│   │   │   ├── Navigation.css
│   │   │   ├── Hero.js
│   │   │   ├── Hero.css
│   │   │   ├── ProjectCard.js
│   │   │   └── ProjectCard.css
│   │   ├── pages/         # Page components
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── styles/        # Global styles
│   │   │   └── global.css
│   │   ├── api.js         # API utilities
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
│
└── server/                # Node.js backend
    ├── config/
    │   └── db.js          # Database configuration
    ├── models/
    │   ├── Project.js     # Project model
    │   └── Contact.js     # Contact model
    ├── controllers/
    │   ├── projectController.js
    │   └── contactController.js
    ├── routes/
    │   ├── projects.js
    │   └── contacts.js
    ├── server.js          # Express server
    ├── .env.example       # Environment variables template
    └── package.json
```

## Adding Sample Data

You can add sample projects using the API or MongoDB directly:

```javascript
// Example project object
{
  "title": "My Awesome Project",
  "description": "A detailed description of the project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "https://example.com/image.jpg",
  "github": "https://github.com/username/repo",
  "liveUrl": "https://project-demo.com",
  "featured": true,
  "order": 1
}
```

## Email Configuration

To enable email notifications for contact form submissions:

1. Create a Gmail App Password:
   - Go to your Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password

2. Add to `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## Deployment

### Frontend (Vercel/Netlify)
1. Build the production version:
```bash
cd client
npm run build
```

2. Deploy the `build` folder to your hosting platform

### Backend (Heroku/Railway/Render)
1. Set environment variables on your hosting platform
2. Deploy the `server` directory
3. Update frontend API URL to production backend URL

## Customization

### Colors
Edit CSS variables in `client/src/styles/global.css`:
```css
:root {
  --color-bg: #0a0a0f;
  --color-accent: #ff3366;
  --color-secondary: #00ffcc;
  /* ... */
}
```

### Fonts
Change fonts in `client/public/index.html` and update CSS variables:
```css
:root {
  --font-display: 'Your Display Font', cursive;
  --font-body: 'Your Body Font', serif;
}
```

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

MIT License - feel free to use this project for your own portfolio.

## Contact

Your Name - Harsh Rajput

Project Link: [https://github.com/harsh-rajputt/My-Portfolio](https://github.com/harsh-rajputt/mern-portfolio)