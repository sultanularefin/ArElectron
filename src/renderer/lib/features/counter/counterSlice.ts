


import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "../../store";
// import {capture_Screenshot_renderer} from "@renderer/my_work/custom_renderer";

export interface CounterState {
  value: number,
  is_playing: boolean,

  hours_State: number,
  minutes_State: number,
  seconds_State: number,

  hour_Text: string,
  min_Text: string,
  second_Text: string,


  apiInvocation_Timer: 0,
}

const initialState: CounterState = {
  value: 0,
  is_playing: false,
  hours_State: 0,
  minutes_State: 0,
  seconds_State: 0,


  hour_Text: "00",
  min_Text: "00",
  second_Text: "00",


  apiInvocation_Timer: 0,
}


/*eslint no-unused-vars: "warn"*/


const updateAPI_invocation_Timer_2 = (state:any, action: PayloadAction<number>) => {


  state.apiInvocation_Timer = action.payload;
}

/*updateAPI_invocation_Timer: (state, action: PayloadAction<number>) => {
  state.apiInvocation_Timer = action.payload;
},
  */


const reset_minute_2 =  (state:any, _action: PayloadAction<boolean>) => {

  state.minutes_State = 0;
  state.min_Text = "00";
}
const reset_second_2 =  (state:any, _action: PayloadAction<boolean>) => {

  state.seconds_State= 0;
  state.second_Text = `00`;
}


const increment_second_2 = (state:any, _action: PayloadAction<boolean>) => {

  // state.seconds_State= state.seconds_State+1;

  const new_second = state.seconds_State+1;
  if (new_second <10) {

    state.second_Text = `0${new_second}`;

  } else{
    state.second_Text = `${new_second}`;

  }

  state.seconds_State= new_second;


}
  const increment_minute_2 = (state:any, _action: PayloadAction<boolean>) => {

    const new_minute = state.minutes_State+1;
    if (new_minute <10) {

      state.min_Text = `0${new_minute}:`;

    } else{
      state.min_Text = `${new_minute}:`;

    }

  state.minutes_State= new_minute;



  }
  const increment_hour_2 = (state:any, _action: PayloadAction<boolean>) => {


  const new_hour = state.hours_State+1;
    if (new_hour <10) {

      state.hour_Text = `0${new_hour}:`;

    } else{
      state.hour_Text = `${new_hour}:`;

    }

    state.hours_State= new_hour;

  }


const start_play_2= (state:any, action: PayloadAction<boolean>) => {
  // state.value += action.payload


  console.log("inside start_play_2",action.payload);

  // console.log("state: ",state);
  state.is_playing= action.payload;

 /* let _Timer_X;


  if(!action.payload){

    clearTimeout(_Timer_X);
  }else{

    let seconds:number = state.seconds_State;
    let mins:number = state.minutes_State;
    let hours:number = state.hours_State;
    _Timer_X = setTimeout(function(){
      seconds++;
      if(seconds >59){
        seconds=0;
        mins++;
        if(mins>59) {
          mins=0;
          hours++;
          if (hours <10) {
            // $("#hours").text('0'+hours+':');

            state.hour_Text= '0'+hours+':';

          } else{
            state.hour_Text= '0'+hours+':';
            // $("#hours").text(hours+':');
          }
        }

        if(mins<10){
          // $("#mins").text('0'+mins+':');
          state.min_Text= '0'+mins+':';
        }
        else {
          // $("#mins").text(mins+':');
          state.min_Text= mins+':';
        }
      }
      if(seconds <10) {
        state.second_Text = `0${seconds}`;
        // $("#seconds").text('0'+seconds);}

      }


      else {

        state.second_Text= `${seconds}`;
        // $("#seconds").text(seconds);
      }


     state.seconds_State =seconds;
     state.minutes_State = mins;
     state.hours_State   = hours;



      // startTimer();
    },1000);
  }*/

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


  // const startTimer=()=>{







};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    start_play: start_play_2,
    increment_second: increment_second_2,
    increment_minute: increment_minute_2,
    increment_hour: increment_hour_2,

    updateAPI_invocation_Timer: updateAPI_invocation_Timer_2,

    // reset part begins here

    reset_second: reset_second_2,
    reset_minute: reset_minute_2,



  },
})

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  start_play,


  increment_second,
  increment_minute,
  increment_hour,

  // reset begins here
  reset_second,
  reset_minute,


  updateAPI_invocation_Timer, // not yet used
} = counterSlice.actions


export const select_is_playing = (state: RootState) => state.counter.is_playing

export const select_State_Seconds = (state: RootState) => state.counter.seconds_State
export const select_State_Mins = (state: RootState) => state.counter.minutes_State
export const select_State_Hours = (state: RootState) => state.counter.hours_State





export const select_Hour_Text = (state: RootState) => state.counter.hour_Text
export const select_Min_Text = (state: RootState) => state.counter.min_Text
export const select_Second_Text = (state: RootState) => state.counter.second_Text


export const selectTimer = (state: RootState) => state.counter.apiInvocation_Timer;


export default counterSlice.reducer
