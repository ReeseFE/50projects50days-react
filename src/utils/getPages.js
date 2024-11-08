const fs = require('fs');
const path = require('path');

const getPages = (dir = 'src/app', basePath = '') => {
  const pagesDir = path.join(process.cwd(), dir);
  const files = fs.readdirSync(pagesDir);

  let pages = [];

  files.forEach((file) => {
    const filePath = path.join(pagesDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      pages = pages.concat(
        getPages(path.join(dir, file), path.join(basePath, file))
      );
    } else if (file === 'page.jsx') {
      pages.push(basePath);
    }
  });

  return pages;
};

module.exports = getPages;
