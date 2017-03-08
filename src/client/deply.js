const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

fs.createReadStream('404.html').pipe(fs.createWriteStream('./build/404.html'));
fs.createReadStream('CNAME').pipe(fs.createWriteStream('./build/CNAME'));
ghpages.publish(path.join(__dirname, 'build'),{
  repo: 'https://github.com/503945930/503945930.github.io.git',
  branch: 'master'
}, (err) => {
  if(err) console.log(err);
  console.log("success");
});
