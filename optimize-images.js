import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src', 'assets');

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const inputPath = path.join(assetsDir, file);
      const outputName = file.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
      const outputPath = path.join(assetsDir, outputName);
      
      console.log(`Converting ${file} to ${outputName}...`);
      
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
        
      console.log(`Success: ${outputName}`);
      
      // Delete the original file to keep the assets directory clean
      fs.unlinkSync(inputPath);
    }
  }
  
  console.log('All images optimized successfully!');
}

optimizeImages().catch(console.error);
