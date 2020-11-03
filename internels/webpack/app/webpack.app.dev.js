const path = require('path');

const options = require('../base/webpack.base')({
  mode: 'development',
  entry: path.join(process.cwd(), 'app/main.ts'),
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), 'build/app/')
  },
  alias: {
    "@/application": path.join(process.cwd(), 'app/application'),
    "@/config": path.join(process.cwd(), 'app/config'),
    "@/ipc": path.join(process.cwd(), 'app/ipc'),
    "@/plugins": path.join(process.cwd(), 'app/plugins'),
    "@/resources": path.join(process.cwd(), 'app/resources'),
    "@/window": path.join(process.cwd(), 'app/window'),
  },
  target: 'electron-main'
});

console.log(options);

module.exports = options;