
import React from 'react';

interface Empty_View_Total_Width_interface {
  comp_Width: number;
  comp_height: number;
}

const Empty_View_Total_Width: React.FC<Empty_View_Total_Width_interface> = ({
  // user_ID_State,
  comp_Width,
  comp_height,
}) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: comp_Width,
        // backgroundColor: 'cyan',
        height: comp_height,
      }}></div>
  );
};

export default Empty_View_Total_Width;
