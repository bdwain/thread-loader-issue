const {fork} = require('child_process');

let child = fork('./run-server.js');

process.on('exit', function(){
  child.kill();
});

child.on('close', function(code) {
  process.exit(code);
});