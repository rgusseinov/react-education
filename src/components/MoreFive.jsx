import React from 'react';

export default React.memo(
  function MoreFive({ count }){     
    const getResult = count === 5 ? 'Is Five' : 'Not Five';
    console.log(`MoreFive render`);
    
    return (
      <div>
        <h3> { getResult } </h3>      
      </div>
    )
}, 
  (prevProps, nextProps) => { 
  if (nextProps.count === 5){
    return false;
  } else {
    return true;
  }
 },
);

