import Application from '@/application/index';
import Window from './window';

const appMain = async () => {
  const app = new Application();

  try {
    await app.start();
    const mainWindow = new Window();
    mainWindow.load();
  } catch (e) {
    console.log('@@@:', e)
  }
}

appMain();