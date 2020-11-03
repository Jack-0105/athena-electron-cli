import { app, BrowserWindow } from 'electron';

class Application {
	/**
	 * @description 程序的主窗口
	 */
	private _mainWindow: BrowserWindow = null;

	constructor(mainWindow?: any) {
		this._mainWindow = mainWindow;
	}

	start = async (): Promise<any> => {
		return new Promise((resolve, reject) => {
			app.on("ready", (launchInfo: any) => {
				resolve(launchInfo);
			})
		})
	}
}

export default Application;