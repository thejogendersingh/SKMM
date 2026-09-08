const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync(srcDir, function (filePath) {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.html') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Replace left-over blue hex codes
        content = content.replace(/\[#30AFFF\]/g, '[#D00012]'); // primary red
        content = content.replace(/\[#1e2433\]/g, '[#0A1424]'); // navy black

        // Replace tailwind blue classes with red
        content = content.replace(/bg-blue-500/g, 'bg-red-600');
        content = content.replace(/text-blue-500/g, 'text-red-600');
        content = content.replace(/border-blue-500/g, 'border-red-600');
        
        content = content.replace(/bg-blue-50/g, 'bg-red-50');
        content = content.replace(/text-blue-50/g, 'text-red-50');
        content = content.replace(/border-blue-50/g, 'border-red-50');

        content = content.replace(/bg-blue-100/g, 'bg-red-100');
        content = content.replace(/text-blue-100/g, 'text-red-100');
        content = content.replace(/border-blue-100/g, 'border-red-100');

        content = content.replace(/bg-blue-200/g, 'bg-red-200');
        content = content.replace(/text-blue-200/g, 'text-red-200');
        content = content.replace(/border-blue-200/g, 'border-red-200');
        
        // Remove shadows
        content = content.replace(/\bhover:shadow-[a-zA-Z0-9_\[\]\-\/\.\(\)\,]+/g, '');
        content = content.replace(/\bshadow-[a-zA-Z0-9_\[\]\-\/\.\(\)\,]+/g, '');
        content = content.replace(/\bshadow\b/g, '');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated: ' + filePath);
        }
    }
});
