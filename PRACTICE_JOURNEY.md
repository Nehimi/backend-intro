# Backend Development Practice Journey

Welcome to my backend development learning journey! This repository contains all the practice files, exercises, and projects I'm working on to master backend development with Node.js and Express.js.

## 📁 Project Structure

```
backend-intro/
├── practice1.js              # Basic Express server with POST route
├── practice2.js              # Static file serving server
├── backend/
│   ├── src/
│   │   └── app.js           # Main application file
│   └── static-files/
│       └── random.html      # Stunning HTML page with modern design
├── package.json              # Project dependencies and scripts
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- Basic knowledge of JavaScript

### Installation
1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Practice Files

#### Practice 1: Basic Express Server
```bash
node practice1.js
```
- Runs on port 5000
- Includes both GET and POST routes
- Test POST requests with:
  ```javascript
  fetch('http://localhost:5000', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: 'YourName', email: 'your@email.com'})
  })
  ```

#### Practice 2: Static File Server
```bash
node practice2.js
```
- Runs on port 3000
- Serves static files from `/static` route
- Access the stunning HTML page at: `http://localhost:3000/static/random.html`

## 📚 Learning Objectives

### ✅ Completed
- [x] Set up basic Express.js server
- [x] Handle GET and POST requests
- [x] Parse JSON request body
- [x] Serve static files
- [x] ES module imports (`import`/`export`)
- [x] Modern HTML/CSS with animations
- [x] Git version control and branching

### 🎯 In Progress
- [ ] Database integration (MongoDB)
- [ ] RESTful API design
- [ ] Error handling middleware
- [ ] Authentication & authorization
- [ ] Environment variables

### 📋 Upcoming Topics
- [ ] API testing with Postman/Insomnia
- [ ] Middleware development
- [ ] File upload handling
- [ ] WebSocket integration
- [ ] Docker containerization
- [ ] Cloud deployment

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **ES Modules** - Modern JavaScript module system

### Frontend (Static Files)
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - Interactive features

### Development Tools
- **Git** - Version control
- **VS Code** - Code editor
- **PowerShell** - Command line

## 📖 Practice Files Description

### `practice1.js`
A simple Express server demonstrating:
- Basic server setup
- GET route for browser access
- POST route for API requests
- JSON body parsing
- Error handling

**Key Features:**
- Port 5000
- Responds with personalized greetings
- Handles both browser and API requests

### `practice2.js`
Static file server showcasing:
- Express static middleware
- Path resolution with ES modules
- Modern file serving patterns

**Key Features:**
- Port 3000
- Serves files from `backend/static-files/`
- Clean URL structure with `/static` prefix

### `random.html`
A stunning demonstration page featuring:
- Modern CSS animations and transitions
- Glassmorphism design
- Interactive JavaScript features
- Responsive design
- Particle effects
- Dynamic background changes

## 🎨 Design Showcase

The `random.html` file demonstrates modern web development capabilities:
- **Gradient backgrounds** with smooth transitions
- **Floating particle animations**
- **3D card effects** with mouse tracking
- **Animated counters** and statistics
- **Interactive buttons** with visual feedback
- **Mobile-responsive design**

## 🔧 Common Issues & Solutions

### ES Module Issues
**Problem:** `require is not defined in ES module scope`
**Solution:** Use `import` syntax instead of `require()`

### Path Resolution
**Problem:** `__dirname is not defined in ES module scope`
**Solution:** 
```javascript
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

### Port Conflicts
**Problem:** Port already in use
**Solution:** Change port number or stop existing processes

## 📝 Code Examples

### Basic Express Server
```javascript
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    const { name } = req.body;
    res.send(`Hello ${name}!`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

### Static File Serving
```javascript
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

## 🌟 Achievements

- [x] Created first Express server
- [x] Successfully handled POST requests
- [x] Implemented static file serving
- [x] Built modern, responsive HTML page
- [x] Mastered ES module syntax
- [x] Set up proper Git workflow
- [x] Created comprehensive documentation

## 🤝 Contributing

This is a personal learning repository. Feel free to:
- Suggest improvements
- Report issues
- Share learning resources
- Provide feedback on code quality

## 📞 Connect

Learning backend development is a journey! If you have questions or want to share knowledge:
- Create an issue for questions
- Share your own practice examples
- Suggest new learning topics

---

**Happy Coding! 🚀**

*Last updated: February 2024*
