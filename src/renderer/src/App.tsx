import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import My_Work from "@renderer/my_work/My_Work";
// import Empty_View_Total_Width from "@renderer/my_work/empty_View/Empty_View_Total_Width";
import Empty_View_With_Height_Only from "@renderer/my_work/empty_View/Empty_View_With_Height_Only";
import Timer from "@renderer/my_work/timer/Timer";
import Timer_Buttons from "@renderer/my_work/timerButtons/Timer_Buttons";

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
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
