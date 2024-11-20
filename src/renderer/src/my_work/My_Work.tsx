import React, {useEffect} from 'react'
import { button_color } from '../../ui_utils/important_colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from // faPla
'@fortawesome/free-brands-svg-icons'

import {
  // faPaperPlane,
  faCircle,
  // faCirclePlay,
  // faCirclePause,
  // faCircleStop,
} from '@fortawesome/free-solid-svg-icons'
import {
  // useDispatch,
  useSelector
} from "react-redux";
import {
  select_is_playing,
  select_State_Hours,
  select_State_Mins,
  // start_play
} from "../../lib/features/counter/counterSlice";
import {capture_Screenshot_renderer} from "@renderer/my_work/custom_renderer";
// import main_Style from "@renderer/assets/main.module.css";
// import my_work_style from "./my_work_styles.module.css";
import Stop_Button from "@renderer/my_work/play_pause_stop_buttons/Stop_Button";
import Play_Button from "@renderer/my_work/play_pause_stop_buttons/Play_Button";

// import moment from 'moment'
// import captureScreen from "@renderer/my_work/custom_renderer";

interface My_Work_Props {}

const My_Work: React.FC<My_Work_Props> = ({}) => {



  const is_Playing_RTK:boolean = useSelector(select_is_playing);
  const hours:number = useSelector(select_State_Hours);
  const mins:number = useSelector(select_State_Mins);

  useEffect(() => {

    let main_f1 = async () => {

      if(is_Playing_RTK){

        const png_image_path= await capture_Screenshot_renderer();

        console.log("png_image_path: ",png_image_path);

        return;
      }


    };

    main_f1();

  }, [
    is_Playing_RTK,
    // driver_Login__Data_OLD,
    // location
  ]);


  // const dispatch = useDispatch();




  return (
    <div
      style={{
        height: '40px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'black'
      }}
    >
      <FontAwesomeIcon
        icon={faCircle}
        // onClick={handleClickEmailSubscription}
        // className={SubscriptionMobileStyles.iconMobile}
        style={{
          color: button_color
        }}
      />

      <span className="icon icon-record" style={{ color: button_color }}>
        <label style={{ color: 'floralwhite', marginLeft: 20 }}>Task Name</label>
      </span>
      <div className="inline" style={{ marginLeft: 32, color: 'floralwhite' }}>
        {/*0h 20 m*/} {`${hours} H ${mins} M`}
      </div>



      <Play_Button/>
      <Stop_Button/>



      {/*part 2 begins here*/}
      {/*<div className="pane" style={{ marginLeft: 20 }}>
        <div
          id="stopAction"
          className="pane-one-third sidebar"
          onClick={() => {
            stopToPlay()
          }}
          style={{
            visibility: 'hidden',
            position: 'absolute',
            marginTop: '-100px',
            marginLeft: '-100px',
            backgroundColor: 'black'
          }}
        >
          <i
            className="fa fa-stop-circle-o"
            aria-hidden="true"
            style={{ fontSize: 40, color: '#9ff722', backgroundColor: 'black' }}
          />
        </div>
      </div>*/}
    </div>
    /*
    <div className="window-content">
      <div className="pane-group" style={{backgroundColor: 'black', paddingTop: 20}}>
        <div className="pane" style={{marginLeft: 20}}>
        <span className="icon icon-record" style={{color: '#4cff00'}}>
          <label style={{color: 'floralwhite', marginLeft: 20}}>Catarpillar</label>
        </span>
          <div className="inline" style={{marginLeft: 32, color: 'floralwhite'}}>
            0h 20 m
          </div>
        </div>
        {/!*play icons below*!/}
        <div
          id="playAction"
          className="pane-one-third sidebar"
          onClick={() => {
            start_recording();
            return;
          }}
          style={{backgroundColor: 'black'}}
        >
          <i
            className="fa fa-play-circle-o"
            aria-hidden="true"
            style={{fontSize: 40, color: '#9ff722', backgroundColor: 'black'}}
          />
        </div>
        {/!*stop icons below*!/}
        <div
          id="stopAction"
          className="pane-one-third sidebar"
          onClick={
            () => {
              stopToPlay();
            }
          }
          style={{
            visibility: 'hidden',
            position: 'absolute',
            marginTop: '-100px',
            marginLeft: '-100px',
            backgroundColor: 'black'
          }}
        >
          <i
            className="fa fa-stop-circle-o"
            aria-hidden="true"
            style={{fontSize: 40, color: '#9ff722', backgroundColor: 'black'}}
          />
        </div>
        {/!*play and stop icons above*!/}
      </div>
    </div>
    */
  )
}

export default My_Work
