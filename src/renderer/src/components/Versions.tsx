import { useState } from 'react'
import main_Style from './../assets/main.module.css';
function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul
      // className="versions"
      className={main_Style.versions}
      // electronVersion
      // chromeVersion
      // nodeVersion
    >
      <li
        // className="electron-version"
        className={main_Style.electronVersion}
      >Electron v{versions.electron}</li>
      <li
        // className="chrome-version"
        className={main_Style.chromeVersion}
      >Chromium v{versions.chrome}</li>
      <li
        // className="node-version"
        className={main_Style.nodeVersion}
      >Node v{versions.node}</li>
    </ul>
  )
}

export default Versions
