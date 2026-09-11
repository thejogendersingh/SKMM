import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');

function replaceExtensionsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  content = content.replace(/\.png/g, '.webp');
  content = content.replace(/\.jpg/g, '.webp');
  content = content.replace(/\.jpeg/g, '.webp');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated imports in ${path.basename(filePath)}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.jsx')) {
      replaceExtensionsInFile(filePath);
    }
  }
}

processDirectory(componentsDir);
console.log('Finished updating extensions in components.');
