import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* eslint-disable no-undef */
// For ES modules
const PORT = process.env?.PORT || 3000;

const app = express();

// Enable compression for all responses
app.use(compression({
  // Compression level (0-9)
  level: 6,
  // Only compress responses above 1kb
  threshold: 1024,
  // Compress all text-based files
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y', // Cache static assets for 1 year
  etag: true,
  lastModified: true
}));

// Handle SPA routing
app.use((req, res, next) => {
  if (req.path.startsWith('/assets/') || req.path.startsWith('/sw.js') || req.path.startsWith('/manifest.webmanifest')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});