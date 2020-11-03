const shell = require("shell");

let win = window;

const openExternal = () => {
  shell.openExternal("http://www.baidu.com");
}

win.electron = {
  openExternal
}