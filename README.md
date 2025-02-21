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

### Netlify Deployment (Frontend)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_SITE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_NAME/deploys)

The frontend is deployed on Netlify. 

**Deployment Steps:**
1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Build Command: `npm run build`
   - Publish Directory: `build/`
3. Configure environment variables as needed

## Technologies
- Backend: Node.js, Express
- Frontend: React
- Deployment: Heroku, Vercel, Netlify
