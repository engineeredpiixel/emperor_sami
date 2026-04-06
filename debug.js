const cp = require('child_process');
const server = cp.spawn('npm.cmd', ['run', 'start', '--', '-p', '3005'], { shell: true });

server.stdout.on('data', d => {
  console.log('SERVER OUT:', d.toString());
  if (d.toString().includes('Ready') || d.toString().includes('Listening')) {
    setTimeout(() => {
        console.log("CURLING...");
        const res = cp.execSync('curl.exe -s http://localhost:3005/projects/vaughan-roofing-exec-2');
        console.log("CURL RESULT:", res.toString().substring(0, 500));
    }, 1000);
  }
});

server.stderr.on('data', d => {
  console.error("SERVER ERR:", d.toString());
});

setTimeout(() => {
    console.log("TIMEOUT");
    server.kill();
    process.exit(0);
}, 10000);
