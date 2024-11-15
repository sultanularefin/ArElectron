// import path from "path";

/*function f1() {


    const {remote} = require('electron')
    const {Tray, Menu} = remote
    const path = require('path')

    let trayIcon = new Tray(path.join('', 'appicon.png'))

    const trayMenuTemplate = [
        {
            label: 'Empty Application',
            enabled: false
        },

        {
            label: 'Settings',
            click: function () {
                console.log("Clicked on settings")
            }
        },

        {
            label: 'Help',
            click: function () {
                console.log("Clicked on Help")
            }
        }
    ]


    let trayMenu = Menu.buildFromTemplate(trayMenuTemplate)
    trayIcon.setContextMenu(trayMenu)

    //@ts-ignore
    remote.BrowserWindow.getFocusedWindow().minimize();


}*/


// import moment from "moment";
// import path from 'path';
// import {screenshot} from 'screenshot-desktop';
// import fs from 'fs';

// const path = require('path')


import { ipcRenderer } from 'electron';

async function captureScreenshot() {
  try {
    const base64Image = await ipcRenderer.invoke('take-screenshot');
    console.log('Screenshot captured:', base64Image);
  } catch (error) {
    console.error('Failed to capture screenshot:', error);
  }
}




function captureScreen() {

  return captureScreenshot();

  /*console.log("at captureScreen");

    moment().format();
    const now = moment().format("D-MMM-YY HH-mm");

    console.log("now: ", now);


    const dir = './../ScreenShots';
    const dir1 = './../ScreenShots/';

    console.log("dir: ",dir);


    // main_Window.loadFile(path.join(__dirname, '../src/index.html'));

    if (!fs.existsSync(dir1)) {
        fs.mkdirSync(dir1);
    } else {
        console.log("Dir1: ", dir1, "existed before");
    }


    const screenShotPath = path.join(dir1);
    console.log(screenShotPath);

    const fileName = now + ".png";

    //console.log(fileName);


    const filecheck = path.join(dir, fileName);
    console.log("filecheck", filecheck);
    // console.log();


    if (fs.existsSync(filecheck)) {

        //     export function unlink(path: PathLike, callback: NoParamCallback): void;
        console.log("file found");
        fs.unlink(filecheck, (err: any) => {


            if (err) {
                console.log("error in delete");
            }

        });


        //count = i;
        //document.cookie = "count = 30";
    } else {
        console.log("not found");
        //count = i;

    }

    console.log("Before screen write");
    //return 0;

    //screenshot()
    screenshot(screenShotPath + now + '.png', function (
      error: any,
                                                        complete: any) {
        if (error)
            console.log("Screenshot failed", error);
        else{
          console.log("Screenshot succeeded");
        }
        if(complete){
          console.log("complete", complete);
        }

    });

*/


}

/*module.exports{
    captureScreen,
}*/

export default captureScreen;


