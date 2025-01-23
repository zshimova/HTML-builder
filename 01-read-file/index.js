const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

readStream.on('data', (dataChunk) => {
  process.stdout.write(dataChunk); // содержимое файла в консоль
});

readStream.on('end', () => {
  console.log('\nЧтение файла завершено.');
});

readStream.on('error', (err) => {
  console.error(`Ошибка при чтении файла: ${err.message}`);
});