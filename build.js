const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync(
  'dist/index.html',
  `<h1>Robo Kitchen</h1><p>Built from commit: ${process.env.GITHUB_SHA || 'local'}</p>`
);
console.log('Build complete: dist/index.html created');
