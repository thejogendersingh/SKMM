const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;
  
  content = content.replace(/className="text-\[22px\] md:text-\[26px\] lg:text-\[28px\][^"]*text-gray-900[^"]*"/g, 'className="section-title"');
  content = content.replace(/className="text-\[22px\] md:text-\[26px\] lg:text-\[28px\][^"]*text-white[^"]*"/g, 'className="section-title text-white"');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated ' + f);
  }
});
