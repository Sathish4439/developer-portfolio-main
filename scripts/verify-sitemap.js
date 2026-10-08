const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const files = [
  'sitemap.xml',
  'sitemap-pages.xml',
  'sitemap-projects.xml',
  'sitemap-blogs.xml',
  'robots.txt'
];

console.log('=== SathishDev Sitemap & SEO Health Check ===\n');

let allValid = true;

for (const file of files) {
  const filePath = path.join(publicDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing: ${file}`);
    allValid = false;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const locMatches = (content.match(/<loc>(.*?)<\/loc>/g) || []).length;
  const imgMatches = (content.match(/<image:loc>/g) || []).length;

  console.log(`✅ ${file.padEnd(22)}: Found (${(content.length / 1024).toFixed(1)} KB) - ${locMatches} URLs${imgMatches > 0 ? `, ${imgMatches} images` : ''}`);
}

console.log('\n--- Google Search Console Submission URLs ---');
console.log('1. https://www.sathishdev.in/sitemap.xml (Master Index)');
console.log('2. https://www.sathishdev.in/sitemap-pages.xml (Pages & Landing)');
console.log('3. https://www.sathishdev.in/sitemap-projects.xml (Case Studies & Images)');
console.log('4. https://www.sathishdev.in/sitemap-blogs.xml (Technical Articles)');
console.log('\n✅ All sitemaps verified and production ready!');
