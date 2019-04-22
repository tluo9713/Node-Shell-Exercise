const pwd = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
<<<<<<< HEAD
    console.log(process.cwd());

    //process.stdout.write(process.cwd);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
=======
      pwd();
  } 
  else if (cmd === 'ls') {
      ls();
  } else {
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
>>>>>>> a57f0a7f26805db265bc980cf87fd2b1de2d9187
  }
});



