




// const path = require('path')


// import { ipcRenderer } from 'electron';
// const screenshot = require('screenshot-desktop');
const  capture_Screenshot_renderer= async ()=> {





  try {
    const png_Image_Path = await window.electron.ipcRenderer.invoke('take-screenshot');
    console.log('Screenshot captured:', png_Image_Path);

    return png_Image_Path;
  } catch (error) {
    console.error('Failed to capture screenshot:', error);
  }


  console.log("capture_Screenshot_renderer");

  // return 1;






}







export  {
  capture_Screenshot_renderer,
};


