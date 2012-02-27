// settings
var FILE_ENCODING = 'utf-8',
    EOL = '\n',
    DIST_FILE_PATH = 'deploy/dragon.js';

// setup
var _fs = require('fs');

function concat(fileList, distPath) {
    var out = fileList.map(function(filePath){
            return _fs.readFileSync(filePath, FILE_ENCODING);
        });
    _fs.writeFileSync(distPath, out.join(EOL), FILE_ENCODING);
    console.log(' '+ distPath +' built.');
}

concat([
    'src/core/core.js',
    'src/core/class.js',
    'src/mvc/view.js',
    'src/helpers/Array.js',
    'src/helpers/Object.js',
    'src/helpers/String.js'
], DIST_FILE_PATH);