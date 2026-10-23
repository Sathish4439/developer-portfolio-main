const fs = require('fs');
const path = require('path');

const sitemap = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

console.log('Checking canonical tags for', urls.length, 'URLs...\n');
let mismatches = 0;

for (const u of urls) {
  const urlPath = u.replace('https://www.sathishdev.in', '') || '/';
  let htmlPath;
  if (urlPath === '/') {
    htmlPath = path.join(__dirname, '..', '.next', 'server', 'app', 'index.html');
  } else {
    // In Next.js App Router, routes can be <name>.html or <name>/index.html
    const directHtml = path.join(__dirname, '..', '.next', 'server', 'app', ...urlPath.split('/')) + '.html';
    const folderHtml = path.join(__dirname, '..', '.next', 'server', 'app', ...urlPath.split('/'), 'index.html');
    if (fs.existsSync(directHtml)) {
      htmlPath = directHtml;
    } else if (fs.existsSync(folderHtml)) {
      htmlPath = folderHtml;
    }
  }

  if (htmlPath && fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) || html.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : 'NONE';
    if (canonical !== u) {
      console.log(`⚠️ MISMATCH: ${urlPath}`);
      console.log(`   Sitemap:   ${u}`);
      console.log(`   Canonical: ${canonical}\n`);
      mismatches++;
    }
  } else {
    console.log(`❓ HTML not found for ${urlPath}`);
    mismatches++;
  }
}

if (mismatches === 0) {
  console.log('✅ All', urls.length, 'sitemap URLs perfectly match page canonical tags!');
} else {
  console.log(`⚠️ Found ${mismatches} mismatches.`);
}
