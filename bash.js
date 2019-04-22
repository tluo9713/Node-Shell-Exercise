const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
      pwd();
  } 
  else if (cmd === 'ls') {
      ls();
  } else if (cmd.startsWith('cat')) {
    let filePath = cmd.split(' ')[1];
    cat(filePath);
  } else {
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
  }
});



