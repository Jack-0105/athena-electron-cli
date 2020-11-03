import { BrowserWindow } from 'electron';
import * as path from 'path';

export default class Window {
  private _url: string = 'www.baidu.com'
  constructor() {
    const window = new BrowserWindow({
      webPreferences: {
        preload: path.resolve(process.cwd(), '../build/app/index.js')
      }
    });

    // window.loadURL(this._url);

    window.loadFile('./index.html');
  }

  load = () => {

  }
}

