const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        filelist = walkSync(dir + '/' + file, filelist);
      }
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Replace variations
  content = content.replace(/9649637111/g, '9672854110');
  content = content.replace(/96496 37111/g, '96728 54110');
  content = content.replace(/\+91 9649637111/g, '+91 9672854110');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated phone number in: ' + filePath);
  }
});
