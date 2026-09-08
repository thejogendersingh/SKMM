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

        // Text Replacements
        content = content.replace(/SKMM Consultancy/g, 'Eduway India');
        content = content.replace(/SKMM CONSULTANCY/g, 'EDUWAY INDIA');
        content = content.replace(/SKMM/g, 'Eduway India');
        content = content.replace(/skmm consultancy/g, 'eduway india');
        content = content.replace(/skmm/g, 'eduway');

        // Color Replacements
        // 1D4ED8 is blue -> primary red gradient start (B00010)
        content = content.replace(/from-\[#1D4ED8\]/g, 'from-[#B00010]');
        // 30AFFF is light blue -> primary red gradient end (E00018)
        content = content.replace(/to-\[#30AFFF\]/g, 'to-[#E00018]');
        // 121935 is dark navy -> Navy Black (0A1424)
        content = content.replace(/bg-\[#121935\]/g, 'bg-[#0A1424]');
        content = content.replace(/text-\[#121935\]/g, 'text-[#0A1424]');
        content = content.replace(/border-\[#1e2433\]/g, 'border-[#0A1424]');
        content = content.replace(/text-\[#1D4ED8\]/g, 'text-[#D00012]');
        // drop shadows with blue rgb
        content = content.replace(/rgba\(48,175,255,/g, 'rgba(208,0,18,');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated: ' + filePath);
        }
    }
});
