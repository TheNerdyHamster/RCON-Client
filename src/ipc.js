import { ipcMain } from 'electron';

export default class IPC {
  static setup() {
    ipcMain.on('connection-add', (event, args) => {});
  }
}
