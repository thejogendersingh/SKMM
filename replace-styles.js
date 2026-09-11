import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src', 'components');

const replacements = [
  // Gradients
  { regex: /bg-gradient-to-r from-\[#B00010\] to-\[#E00018\]/g, replacement: 'bg-[#A51318]' },
  { regex: /bg-gradient-to-b from-\[#B00010\] to-\[#E00018\]/g, replacement: 'bg-[#A51318]' },
  { regex: /bg-gradient-to-t from-\[#0A1424\]\/90 to-transparent/g, replacement: 'bg-gradient-to-t from-[#193147]/90 to-transparent' },
  { regex: /from-\[#B00010\] to-\[#E00018\]/g, replacement: 'from-[#A51318] to-[#A51318]' }, // Catch-all for text-gradient
  { regex: /text-transparent bg-clip-text bg-gradient-to-r from-\[#A51318\] to-\[#A51318\]/g, replacement: 'text-[#A51318]' }, // Clean up the text gradient

  // Colors
  { regex: /#0A1424/g, replacement: '#193147' },
  { regex: /#D00012/g, replacement: '#A51318' },

  // Fonts
  { regex: /font-manrope/g, replacement: 'font-satoshi' }
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated styles in ${path.basename(filePath)}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.jsx')) {
      replaceInFile(filePath);
    }
  }
}

processDirectory(componentsDir);
console.log('Finished updating styles globally.');
