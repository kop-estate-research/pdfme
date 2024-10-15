const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function linkWorkspaces() {
  const packagesDir = path.join(__dirname, '../packages');

  // Link all directories inside packages/
  fs.readdirSync(packagesDir).forEach(dir => {
    const fullPath = path.join(packagesDir, dir);
    if (fs.lstatSync(fullPath).isDirectory()) {
      console.log(`Linking: ${fullPath}`);
      try {
        process.chdir(fullPath);
        execSync('npm link', { stdio: 'inherit' });
        process.chdir('../..');
      } catch (error) {
        console.error(`Failed to link ${fullPath}: ${error.message}`);
      }
    }
  });

  // Link specific directories: generator and ui
  const specificDirs = ['generator', 'ui'];
  specificDirs.forEach(dir => {
    const fullPath = path.join(packagesDir, dir);
    if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
      console.log(`Linking @pdfme/common and @pdfme/schemas in: ${fullPath}`);
      try {
        process.chdir(fullPath);
        execSync('npm link @pdfme/common', { stdio: 'inherit' });
        execSync('npm link @pdfme/schemas', { stdio: 'inherit' });
        process.chdir('../..');
      } catch (error) {
        console.error(`Failed to link ${fullPath}: ${error.message}`);
      }
    }
  });
}

try {
  linkWorkspaces();
} catch (err) {
  console.error('Error linking workspaces:', err.message);
}