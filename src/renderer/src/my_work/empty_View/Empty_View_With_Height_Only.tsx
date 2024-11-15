
import React from 'react';

interface Empty_View_With_Height_Only_interface {
  // comp_Width: number;
  comp_height: number;
}

const Empty_View_With_Height_Only: React.FC<Empty_View_With_Height_Only_interface> = ({
  // user_ID_State,
  // comp_Width,
  comp_height,
}) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        // backgroundColor: 'cyan',
        height: comp_height,
      }}></div>
  );
};

export default Empty_View_With_Height_Only;
