import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import My_Work from "@renderer/my_work/My_Work";
// import Empty_View_Total_Width from "@renderer/my_work/empty_View/Empty_View_Total_Width";
import Empty_View_With_Height_Only from "@renderer/my_work/empty_View/Empty_View_With_Height_Only";
import Timer from "@renderer/my_work/timer/Timer";
import Timer_Buttons from "@renderer/my_work/timerButtons/Timer_Buttons";


import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

import main_Style from './assets/main.module.css';
config.autoAddCss = false
// for fontawesome ends here

function App(): JSX.Element {
  const ipcHandle = (): void => {
    window.electron.ipcRenderer.send('ping');
  }

  return (
    <>
      <img alt="logo"
           className={main_Style.logo}
           // className="logo"

           src={electronLogo} />
      <div
        className={main_Style.creator}
        // className="creator"

      >Powered by electron-vite</div>
      <div
        className={main_Style.text}
        // className="text"
      >
        Build an Electron app with <span

        className={main_Style.react}
        // className="react"

      >React</span>
        &nbsp;and <span
        className={main_Style.ts}
        // className="ts"

      >TypeScript</span>
      </div>
      <p
        className={main_Style.tip}
        // className="tip"

      >
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div
        // className="actions"
        className={main_Style.actions}

      >
        <div
          // className="action"
          className={main_Style.action}
        >
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div

          className={main_Style.action}
          // className="action"
        >
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>

      {/*<div style={{
        backgroundColor: "teal",
      }}><p>ssss</p></div>*/}


      <Empty_View_With_Height_Only

      comp_height={15}
      />


      <Timer/>

      <Timer_Buttons/>




      <My_Work/>





      <Versions></Versions>
    </>
  )
}

export default App
