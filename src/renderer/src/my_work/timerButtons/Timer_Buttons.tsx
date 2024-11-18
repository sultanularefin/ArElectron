import TimeStyles from "@renderer/my_work/timer/timeStyle.module.css";
// import Timer from "@renderer/my_work/timer/Timer";
import React, {/*useEffect*/} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {select_is_playing} from "../../../lib/features/counter/counterSlice";
// import {capture_Screenshot_renderer} from "@renderer/my_work/custom_renderer";


interface Timer_Buttons_interface{


}
const Timer_Buttons: React.FC<Timer_Buttons_interface> = ({ })=>{
// const Timer_Buttons=()=>{


  // const dispatch = useDispatch();




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
