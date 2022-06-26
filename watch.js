const chokidar = require('chokidar');
const { spawn } = require('child_process');
const { clearTimeout } = require('timers');

var timer = null;

chokidar.watch('src', {
}).on('change', (path) => {
  console.log(path);

  if(timer != null) {
    clearTimeout(timer);
  }

  timer = setTimeout(function() {

    var cmd = spawn('vue build');
    cmd.stdout.on('data', output => {
      console.log(output);
    })

    cmd.stderr.on('data', err => console.log(err))

  }, 2000)
  
});