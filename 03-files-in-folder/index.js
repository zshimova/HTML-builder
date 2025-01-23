const fs = require('fs');
const path = require('path');


const folderPath = path.join(__dirname, 'secret-folder');


fs.promises.readdir(folderPath, { withFileTypes: true })
  .then((files) => {
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(folderPath, file.name);
        const fileName = path.parse(file.name).name;
        const fileExt = path.extname(file.name).slice(1);

        fs.promises.stat(filePath)
          .then((stats) => {
            const fileSize = (stats.size / 1024).toFixed(3);
            console.log(`${fileName} - ${fileExt} - ${fileSize}kb`);
          })
          .catch((err) => console.error(`Error getting stats for file ${file.name}: ${err.message}`));
      }
    });
  })
  .catch((err) => console.error(`Error reading folder: ${err.message}`));