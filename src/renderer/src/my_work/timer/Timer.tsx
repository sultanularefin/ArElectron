

import TimeStyles from './timeStyle.module.css';
import {
  select_Hour_Text,
  select_Min_Text,
  select_Second_Text,
  select_is_playing,
  // select_State_Hours,
  select_State_Mins,
  select_State_Seconds, increment_second, increment_minute, increment_hour, select_State_Hours
} from "../../../lib/features/counter/counterSlice";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
// import {capture_Screenshot_renderer} from "@renderer/my_work/custom_renderer";

interface Timer_Props{

}

const Timer: React.FC<Timer_Props> = ({}) => {
// const Timer=()=>{




  const is_Playing_RTK:boolean = useSelector(select_is_playing);

  let hours:number = useSelector(select_State_Hours);
  let mins:number = useSelector(select_State_Mins);
  let seconds:number = useSelector(select_State_Seconds);
  const dispatch = useDispatch();


  console.log("hours: ",hours);
  console.log("mins: ",mins);
  console.log("seconds: ",seconds);


  useEffect(() => {

    let timer_x;
    let main_f1 = async () => {

      if(is_Playing_RTK){


        console.log("is_Playing_RTK at <<Timer is : >>: ",is_Playing_RTK);



        // let hours =0;
        // let mins =0;
        // let seconds =0;

        /* $('#start').click(function(){
           startTimer();
         });

         $('#stop').click(function(){
           clearTimeout(timex);
         });

         $('#reset').click(function(){
           hours =0;      mins =0;      seconds =0;
           $('#hours','#mins').html('00:');
           $('#seconds').html('00');
         });*/


         const startTimer=()=>{
           timer_x = setTimeout(function(){
             seconds++;
             dispatch(increment_second(true));
             if(seconds >59){
               seconds=0;
               // mins++;
               dispatch(increment_minute(true));
               if(mins>59) {
                 mins=0;
                 // hours++;
                 dispatch(increment_hour(true));
                /* if (hours <10) {
                   // $("#hours").text('0'+hours+':')
                   dispatch(increment_hour(true));
                 } else{
                   $("#hours").text(hours+':');
                 }*/
               }

               /*if(mins<10){
                 $("#mins").text('0'+mins+':');}
               else $("#mins").text(mins+':');*/
             }
             /*if(seconds <10) {
               $("#seconds").text('0'+seconds);} else {
               $("#seconds").text(seconds);
             }*/


             startTimer();
           },1000);
         }



        return;
      }
      else{
        clearTimeout(timer_x);

      }


    };

    main_f1();

  }, [
    is_Playing_RTK,
    // driver_Login__Data_OLD,
    // location
  ]);



  // let hours =0;
  // let mins =0;
  // let seconds =0;

 /* $('#start').click(function(){
    startTimer();
  });

  $('#stop').click(function(){
    clearTimeout(timex);
  });

  $('#reset').click(function(){
    hours =0;      mins =0;      seconds =0;
    $('#hours','#mins').html('00:');
    $('#seconds').html('00');
  });*/


 /* const startTimer=()=>{
    const timex = setTimeout(function(){
      seconds++;
      if(seconds >59){
        seconds=0;
        mins++;
        if(mins>59) {
          mins=0;
          hours++;
          if (hours <10) {
            $("#hours").text('0'+hours+':')
          } else{
            $("#hours").text(hours+':');
          }
        }

        if(mins<10){
          $("#mins").text('0'+mins+':');}
        else $("#mins").text(mins+':');
      }
      if(seconds <10) {
        $("#seconds").text('0'+seconds);} else {
        $("#seconds").text(seconds);
      }


      startTimer();
    },1000);
  }
*/

  const hour_Text:string = useSelector(select_Hour_Text);
  const min_Text:string = useSelector(select_Min_Text);
  const second_Text:string = useSelector(select_Second_Text);


  // const hours_RTK:number = useSelector(select_State_Hours);
  // const mins_RTK:number = useSelector(select_State_Mins);
  // const seconds_RTK:number = useSelector(select_State_Seconds);









  return(

    <div className={TimeStyles.timer_Wrapper}>
      <div
        className={TimeStyles.timer}
      >
        <span

          id="hours"
          className={TimeStyles.hours}

        >{hour_Text}:</span>
        <span
          id="mins"
        >{min_Text}:</span>
        <span
          id="seconds"
        >{second_Text}</span>
      </div>

    </div>
  );
};


export default Timer;


