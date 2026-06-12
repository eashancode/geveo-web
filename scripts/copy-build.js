import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const clientDir = path.join(distDir, 'client');
const tempDir = path.join(rootDir, 'dist_temp');

console.log('Packaging build for static hosting...');
console.log(`Source client build: ${clientDir}`);
console.log(`Target dist folder: ${distDir}`);

try {
  // Ensure client directory exists
  if (!fs.existsSync(clientDir)) {
    console.error(`Error: Client build directory "${clientDir}" does not exist. Did the build fail?`);
    process.exit(1);
  }

  // Remove existing temp directory if it exists
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  // Copy dist/client to tempDir
  fs.cpSync(clientDir, tempDir, { recursive: true });
  console.log('Copied client files to temporary folder.');

  // Clean dist directory
  fs.rmSync(distDir, { recursive: true, force: true });
  console.log('Cleaned "dist" folder.');

  // Copy tempDir back to distDir
  fs.cpSync(tempDir, distDir, { recursive: true });
  console.log('Moved client build to root of "dist" folder.');

  // Cleanup tempDir
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('✓ Successfully packaged static website in "dist" folder!');
} catch (err) {
  console.error('Failed to package build:', err);
  process.exit(1);
}
