import {contextBridge, /*ipcMain*/} from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}
import {screenshot} from 'screenshot-desktop';
// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);


    contextBridge.exposeInMainWorld('myAPI', {
      getProcessEnv: async () => {
        console.log("at here important");

        const val = process.env;

        console.log("val: ",val);



        // ipcMain.handle('take-screenshot', async () => {

        console.log("at take-screenshot  main process");
        let image=null;
        try {
          const buffer = await screenshot();
          image= buffer.toString('base64'); // Return as a Base64 string
        } catch (error) {
          throw new Error('Failed to take screenshot');
        }

        console.log("image: ",image);
        // });


        /*  try {
            const base64Image = await ipcRenderer.invoke('take-screenshot');
            console.log('Screenshot captured:', base64Image);
          } catch (error) {
            console.error('Failed to capture screenshot:', error);
          }*/

        return val;
      }, // Expose process.env securely






    });

    contextBridge.exposeInMainWorld('take-screenshot', {
      getProcessEnv: () => process.env, // Expose process.env securely
    });
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
