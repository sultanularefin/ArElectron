import my_work_style from "@renderer/my_work/my_work_styles.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleStop} from "@fortawesome/free-solid-svg-icons";
import {button_color} from "../../../ui_utils/important_colors";
import React from "react";
import {useDispatch} from "react-redux";
import {start_play} from "../../../lib/features/counter/counterSlice";

interface Stop_Button_Props{

}

const Stop_Button: React.FC<Stop_Button_Props> = ({}) => {
// const Stop_Button=()=>{



  const dispatch = useDispatch();




  const stop_recording = () => {
    // console.log('a');

    dispatch(start_play(false))


    // setInterval(captureScreen, 1);did
    // declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;

    // 1000 means 1 second 60*1000 means 1 minute
  }


  return (
    <div
      className={my_work_style.button}
      // id="playAction"
      // className="pane-one-third sidebar"
      onClick={() => {
        stop_recording()
        return
      }}
      style={
        {
          // backgroundColor: 'black'
        }
      }
    >
      <FontAwesomeIcon
        className={my_work_style.icon}
        icon={faCircleStop}
        // onClick={handleClickEmailSubscription}
        // className={SubscriptionMobileStyles.iconMobile}
        style={{
          color: button_color
        }}
      />
    </div>
  );
};
export default Stop_Button;
