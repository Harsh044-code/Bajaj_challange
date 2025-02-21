# Bajaj Finserv Health Dev Challenge

## Author Details
- **Name**: Harsh Raj Choudhary
- **Roll Number**: 22BCS11231
- **Email**: harsh.raj.choudhary@example.com

## Project Overview
This is a full-stack web application developed for the Bajaj Finserv Health Dev Challenge, demonstrating backend API and frontend interaction capabilities.

## Project Setup

### Backend (Node.js/Express)
```bash
cd backend
npm install
npm start  # Runs on port 5000
```

### Frontend (React)
```bash
cd frontend
npm install
npm start  # Runs on port 3000
```

## Deployment Options

### Heroku Deployment
1. Create `Procfile` in root directory:
```
web: cd backend && npm start
```

2. Deploy steps:
```bash
heroku create bajaj-machine-coding
git add .
git commit -m "Node.js backend deployment"
heroku buildpacks:set heroku/nodejs
git push heroku main
```

### Vercel Deployment (Frontend)
```bash
npm install -g vercel
vercel
```

## Technologies
- Backend: Node.js, Express
- Frontend: React
- Deployment: Heroku, Vercel
