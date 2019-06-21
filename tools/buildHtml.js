import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console */
fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if (err)
        return console.log(err);
    
    const $ =cheerio.load(markup); // cherio es para acceder a miembros del DOM, una especie de jquery?
    //since a separate spreadsheet is onlyu utilized for the production build, need to dynamical
    $('head').prepend('<link rel="stylesheet" href="style.css">');

    fs.writeFile('dist/index.html', $.html() , 'utf8', err =>{
        if (err) {
            return console.log(err);
        }
        console.log('index.html written to /dist'.green);
    });
});