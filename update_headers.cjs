const fs = require('fs');
const path = require('path');
const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  if (file === 'TrackRecord.jsx') return;
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  // Replace h2 classes
  content = content.replace(/(<h2[^>]*className=["'])([^"']*)(["'])/g, (match, prefix, classes, suffix) => {
    if (classes.includes('section-title')) return match;
    
    let newClasses = classes
      .replace(/\btext-(3xl|4xl|5xl)\b/g, '')
      .replace(/\bmd:text-(4xl|5xl|\[32px\]|\[36px\]|\[40px\])\b/g, '')
      .replace(/\blg:text-(5xl|\[32px\]|\[36px\]|\[40px\])\b/g, '')
      .replace(/\btext-\[36px\]\b/g, '')
      .replace(/\bfont-extrabold\b/g, 'font-bold')
      .replace(/\bfont-black\b/g, 'font-bold')
      .replace(/\s+/g, ' ').trim();
    
    if (!newClasses.includes('text-[22px]') && !newClasses.includes('text-[28px]')) {
       newClasses = 'text-[22px] md:text-[28px] ' + newClasses;
    }
    
    if (!newClasses.includes('font-bold')) newClasses += ' font-bold';

    newClasses = newClasses.replace(/text-\[\#1e2433\]/g, 'text-gray-900')
                           .replace(/text-\[\#111827\]/g, 'text-gray-900')
                           .replace(/text-navy-900/g, 'text-gray-900');

    if (classes !== newClasses) changed = true;
    return prefix + newClasses.replace(/\s+/g, ' ').trim() + suffix;
  });

  // Replace small upper titles
  content = content.replace(/(<span[^>]*className=["'])([^"']*)(["'][^>]*>[^<]+<\/span>\s*<h2)/g, (match, prefix, classes, suffix) => {
    let newClasses = classes
      .replace(/\btext-secondaryBlue\b/g, 'text-gray-600')
      .replace(/\btext-\[\#30AFFF\]\b/g, 'text-gray-600')
      .replace(/\btext-sm\b/g, '')
      .replace(/\btracking-wider\b/g, 'tracking-widest')
      .replace(/\s+/g, ' ').trim();
      
    if (!newClasses.includes('text-[12px]')) {
       newClasses += ' text-[12px] sm:text-[13px]';
    }

    if (classes.includes('text-blue-200') || classes.includes('text-sky-300') || classes.includes('text-white')) {
       newClasses = newClasses.replace(/text-gray-600/g, 'text-gray-300');
    }

    if (classes !== newClasses) changed = true;
    return prefix + newClasses.replace(/\s+/g, ' ').trim() + suffix;
  });

  if (changed) {
    fs.writeFileSync(p, content);
    console.log('Updated ' + file);
  }
});
