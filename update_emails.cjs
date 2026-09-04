const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/thejo/Desktop/SMMM/skmm-consultancy/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  const newEmail = 'skmmconsultancy@gmail.com';
  
  if (content.includes('info@skmmconsultancy.com') || content.includes('support@smmmconsultancy.com')) {
    content = content.replace(/info@skmmconsultancy\.com/g, newEmail);
    content = content.replace(/support@smmmconsultancy\.com/g, newEmail);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(p, content);
    console.log('Updated emails in ' + file);
  }
});
