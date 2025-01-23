const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(filePath, { flags: 'a' }); 


process.stdout.write('Welcome! Type your text below. To exit, type "exit" or press Ctrl + C.\n');


process.stdin.on('data', (data) => {
  const text = data.toString().trim();
  if (text.toLowerCase() === 'exit') {
    process.stdout.write('\nThank you, goodbye!\n');
    process.exit();
  } else {
    stream.write(text + '\n');
  }
});


process.on('SIGINT', () => {
  process.stdout.write('\nThank you, goodbye!\n');
  process.exit();
});


process.on('exit', () => {
  stream.end();
});