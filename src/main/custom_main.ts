import screenshot from 'screenshot-desktop';
import moment from "moment";
import path from 'path';
// import {screenshot} from 'screenshot-desktop';
import fs from 'fs';

const take_screen_shot_main=async ()=>{




  console.log("at captureScreen");

  moment().format();
  const now = moment().format("D-MMM-YY_HH-mm");




  // const dir = '../ScreenShots';
  const dir1 = './ScreenShots/'; // /Volumes/APFS_500GB/electron_codes/my-app/ScreenShots/

  // console.log("dir: ",dir);


// main_Window.loadFile(path.join(__dirname, '../src/index.html'));

  if (!fs.existsSync(dir1)) {
    console.log(`not existed before ${dir1}`);
    fs.mkdirSync(dir1);
  } else {
    console.log("Dir1: ", dir1, "existed before");
  }


  // const screenShotPath = path.join(dir1);
  // console.log("screenShotPath: ",screenShotPath);

  const fileName = `${now}.png`;

//console.log(fileName);


  const file_check = path.join(dir1, fileName);
  console.log("file_check", file_check);
// console.log();


  if (fs.existsSync(file_check)) {

    //     export function unlink(path: PathLike, callback: NoParamCallback): void;
    console.log("file found");
    fs.unlink(file_check, (err: any) => {

      console.log("file deleted successfully (but why existed before)");

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

  // console.log("file_check: ",file_check);

  screenshot({

    filename: file_check,
   // filename: string;
    format: 'png',
    // screen: screenshotDesktop.DisplayID,


  }).then((imgPath:string) => {
    console.log("imgPath: ",imgPath);
    // imgPath: absolute path to screenshot
    // created in current working directory named shot.png

    return imgPath;
  }).catch((err: any) => {
    console.log("err: in capturing screen shot",err);
  });

}

export {
  take_screen_shot_main,
}
