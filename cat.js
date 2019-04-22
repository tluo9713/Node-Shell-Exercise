const fs = require('fs');

module.exports = (function(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    });
    process.stdout.write('\nprompt > ');

})