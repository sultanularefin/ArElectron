import TimeStyles from "@renderer/my_work/timer/timeStyle.module.css";
// import Timer from "@renderer/my_work/timer/Timer";
import React from "react";


interface Timer_Buttons_interface{


}
const Timer_Buttons: React.FC<Timer_Buttons_interface> = ({ })=>{
// const Timer_Buttons=()=>{

  return (
    <div id="controls" className={
      TimeStyles.controls
    }>
      <button className={TimeStyles.button} id="start">Start</button>
      <button className={TimeStyles.button} id="stop">Stop</button>
      <button className={TimeStyles.button} id="reset">Reset</button>
    </div>
  );
};

export default Timer_Buttons;
