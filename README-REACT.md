# Developer Portfolio - React Version

This is the React version of the developer portfolio, converted from Next.js to a pure React application using Vite.

## Changes from Next.js Version

- **Framework**: Converted from Next.js 16 to React 19 with Vite
- **Routing**: Uses React Router instead of Next.js file-based routing
- **Images**: Uses standard `<img>` tags instead of `next/image`
- **Links**: Uses React Router's `Link` component for internal navigation
- **API Routes**: Contact form API needs to be set up separately (see Backend Setup)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build

```bash
npm run build
```

## Backend Setup

The contact form requires a backend API. You have two options:

### Option 1: Use the existing Next.js API routes
Keep the `app/api` folder and run a separate Next.js server for the API endpoints.

### Option 2: Create a standalone backend
Create a simple Express.js server with the contact endpoint:

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  // Copy the logic from app/api/contact/route.js
});

app.listen(3001, () => {
  console.log('API server running on port 3001');
});
```

Then update `VITE_APP_URL` in your `.env` file to point to your backend.

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_URL=http://localhost:3001
VITE_GTM=GTM-XXXXXXX
```

Note: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the client.

## Project Structure

```
src/
├── components/        # React components
├── pages/            # Page components
├── utils/            # Utility functions and data
├── assets/           # Images, SVGs, Lottie files
├── css/              # SCSS stylesheets
└── main.jsx          # Entry point
```

## Features

- ✅ All original features preserved
- ✅ React Router for navigation
- ✅ Client-side rendering
- ✅ Fast development with Vite
- ✅ All animations and styles intact

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`

### Other Static Hosts
Build the project and deploy the `dist` folder to any static hosting service.

