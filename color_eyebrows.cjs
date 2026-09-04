const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/thejo/Desktop/SMMM/skmm-consultancy/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  // We are looking for spans that have uppercase and tracking-(wide|widest|wider)
  content = content.replace(/(<span[^>]*className=["'])([^"']*)(["'][^>]*>)/g, (match, prefix, classes, suffix) => {
    if (classes.includes('uppercase') && classes.match(/tracking-(wide|wider|widest)/)) {
      // It's an eyebrow span!
      let newClasses = classes
        .replace(/\btext-gray-\d+\b/g, '')
        .replace(/\btext-slate-\d+\b/g, '')
        .replace(/\btext-blue-\d+\b/g, '')
        .replace(/\btext-sky-\d+\b/g, '')
        .replace(/\btext-secondaryBlue\b/g, '')
        .replace(/\btext-\[\#30AFFF\]\b/g, '')
        .replace(/\btext-highlightBlue\b/g, '')
        .replace(/\btext-white\b/g, '')
        .replace(/\s+/g, ' ').trim();
      
      // Add the button gradient
      if (!newClasses.includes('bg-clip-text')) {
        newClasses += ' text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#30AFFF]';
      }

      if (classes !== newClasses) {
        changed = true;
      }
      return prefix + newClasses.replace(/\s+/g, ' ').trim() + suffix;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(p, content);
    console.log('Updated eyebrows in ' + file);
  }
});
