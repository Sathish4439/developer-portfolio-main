# Next.js Related Files - To Remove or Keep

This document lists all Next.js-specific files that remain in the project after conversion to React.

## 📁 Files to DELETE (Next.js Specific)

### Configuration Files
- ✅ `next.config.js` - Next.js configuration (not needed for React)
- ✅ `app/layout.js` - Next.js root layout (replaced by `src/App.jsx`)
- ✅ `app/page.js` - Next.js home page (replaced by `src/pages/Home.jsx`)
- ✅ `app/not-found.jsx` - Next.js 404 page (replaced by `src/pages/NotFound.jsx`)
- ✅ `app/blog/page.js` - Next.js blog page (replaced by `src/pages/Blog.jsx`)

### API Routes (Can be kept for backend or removed)
- ✅ `app/api/contact/route.js` - Contact form API endpoint
- ✅ `app/api/data/route.js` - Test API endpoint
- ✅ `app/api/google/route.js` - Google reCAPTCHA API endpoint

**Note:** These API routes can be:
1. **Deleted** if you're using the standalone backend (`server-example.js`)
2. **Kept** if you want to run a separate Next.js server just for APIs
3. **Converted** to Express.js routes (see `server-example.js`)

### Docker Files (Need Update)
- ⚠️ `Dockerfile.dev` - Currently configured for Next.js
- ⚠️ `Dockerfile.prod` - Currently configured for Next.js
- ⚠️ `docker-compose.yml` - References Next.js Dockerfiles

**Note:** These need to be updated for Vite/React or removed if not using Docker.

## 📁 Directories to DELETE (Already Copied to src/)

### Components (Already in src/components/)
- ✅ `app/components/` - All components copied to `src/components/`
- ✅ `app/components/homepage/` - All homepage components copied
- ✅ `app/components/helper/` - Helper components copied

### Assets (Already in src/assets/)
- ✅ `app/assets/` - All assets copied to `src/assets/`
- ✅ `app/assets/lottie/` - Lottie animations copied
- ✅ `app/assets/svg/` - SVG icons copied

### Styles (Already in src/css/)
- ✅ `app/css/` - CSS files copied to `src/css/`

## 📁 Files to KEEP (Not Next.js Specific)

### Utilities
- ✅ `utils/` - Data files and utilities (used by React version)
- ✅ `public/` - Static assets (images, etc.)

### Configuration
- ✅ `package.json` - Updated for React/Vite
- ✅ `tailwind.config.js` - Updated for React
- ✅ `postcss.config.js` - Updated for ES modules
- ✅ `jsconfig.json` - Path aliases configuration
- ✅ `vite.config.js` - Vite configuration (NEW)
- ✅ `index.html` - Vite entry point (NEW)
- ✅ `.gitignore` - Updated
- ✅ `.eslintrc.cjs` - ESLint configuration

## 🗑️ Recommended Cleanup Commands

```bash
# Remove Next.js specific files
rm -rf app/
rm next.config.js

# Remove Next.js Docker files (if not using Docker)
rm Dockerfile.dev Dockerfile.prod docker-compose.yml

# Or update Docker files for Vite/React
```

## 📝 Summary

**Total Next.js Files to Remove:**
- 1 config file (`next.config.js`)
- 1 entire directory (`app/`) with all its contents
- 3 API route files (optional - can keep for backend)
- 3 Docker files (optional - can update for React)

**Files Already Converted:**
- All components → `src/components/`
- All assets → `src/assets/`
- All styles → `src/css/`
- All utilities → `src/utils/`
- All pages → `src/pages/`

## ⚠️ Important Notes

1. **API Routes**: If you delete `app/api/`, make sure you have the backend server (`server-example.js`) running for the contact form to work.

2. **Docker**: If you're using Docker, you'll need to update the Dockerfiles to use Vite instead of Next.js.

3. **Backup**: Consider backing up the `app/` directory before deletion if you want to reference the original Next.js code.


