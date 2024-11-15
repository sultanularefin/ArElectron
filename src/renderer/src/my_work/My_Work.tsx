import React from 'react'
import { button_color } from '../../ui_utils/important_colors'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  // faPla
} from "@fortawesome/free-brands-svg-icons";

import {


  // faPaperPlane,
  faCircle,
  faCirclePlay,
  // faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
// import captureScreen from "@renderer/my_work/custom";


// import app_style from "./app.module.css";
// import styles from '/app.css';  // Importing the CSS module

// import styles from './styles.module.css' // Importing the CSS module
// const moment = require('moment');
import moment from "moment";
// import captureScreen from "@renderer/my_work/custom";
interface My_Work_Props {}

const My_Work: React.FC<My_Work_Props> = ({}) => {
  const playToStop = () => {
    console.log('a')


    moment().format()

    /*jQuery("#playAction").css({
      'visibility': 'hidden',
      'position': 'absolute',
      'margin-top': '-100px',
      'margin-left': '-100px'
    });*/

    /* jQuery("#stopAction").css({
       'visibility': 'visible',
       'position': 'static',
       'margin-top': '0px',
       'margin-left': '0px'
     });*/

    console.log('AT playAction')

    //return 0;

    const x = moment().format('mm')


    const n = parseInt(x)

    const numbers: number[] = []

    for (let i = 1; i <= 60 - n; i++) {
      numbers[i] = 0
      //console.log(numbers[i]);
    }
    //console.log("x");
    /*
        const now = moment().format("D-MMM-YY HH-mm");
        for (let i = 1; i <= 60 - n; i++) {
          //console.log(i);
          //console.log(numbers[i]);
          setInterval(captureScreen, 1000 * 60, now, i);
        }

        setInterval(captureScreen, 60000);*/

    // 1000 means 1 second 60*1000 means 1 minute
  }

  const stopToPlay = () => {
    console.log('b')
    //return 0;

    /* jQuery("#stopAction").css({
       'visibility': 'hidden',
       'position': 'absolute',
       'margin-top': '-100px',
       'margin-left': '-100px'
     });

     jQuery("#playAction").css({
       'visibility': 'visible',
       'position': 'static',
       'margin-top': '0px',
       'margin-left': '0px'
     });*/

    console.log(' AT stopAction')
    return 0
  }

  //function togglePlayStop(action) {

  //    if (action === "playAction") {

  //        //jQuery("#playAction").addClass("playStopMakeHidden");

  //        //jQuery("#playAction").ad(".playStopMakeHidden");

  //        // jQuery("#stopAction").addClass("playStopMakeVisible");
  //        //jQuery("#stopAction").css(".playStopMakeVisible");

  //    }
  //    if (action === "stopAction") {
  //        //jQuery("#stopAction").addClass("playStopMakeHidden");

  //    }

  //    //var a = 12;
  //    //console.log(a);
  //    //return 0;
  //}

  /* const test=()=> {

     console.log("At test");
     return;
   }*/

  //function request() {
  //    http.get(options, function (res) {
  //        res.on('data', function (chunk) {
  //            console.log(chunk);
  //        });
  //    }).on("error", function (e) {
  //        console.log("Got error: " + e.message);
  //    });
  //}

  //var now = moment().format("D-MMM-YY HH:mm");

  //var count = 0;

  //setInterval(captureScreen, 6000, now, ++count);

  //captureScreen(now, count) = captureScreen(4 - Oct - 17 21:43, 1)

  //problem is here count is always 1.
  //so if date is same as previous then increment cookie count(count = count + 1);
  //and then store in cookie.count value and now value.captureScreen(now, count)

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
        0h 20 m
      </div>

      {
        <div
          id="playAction"
          className="pane-one-third sidebar"
          onClick={() => {
            playToStop()
            return
          }}
          style={{
            // backgroundColor: 'black'
        }}
        >

          <FontAwesomeIcon
            icon={faCirclePlay}
            // onClick={handleClickEmailSubscription}
            // className={SubscriptionMobileStyles.iconMobile}
            style={{
              color: button_color
            }}
          />

        </div>
      }

      {/*part 2 begins here*/}
      <div className="pane" style={{ marginLeft: 20 }}>
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
      </div>
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
            playToStop();
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
