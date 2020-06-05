const initialState={
    state: "",
    recovered:0, 
    death:0, 
    positive:0, 
    negative:0
  };
  
  export  const mapReducer = (state=initialState, action)=>{
  switch(action.type){
   case 'CHANGE_LOCATION' :
       console.log(action.currentLocation)
     return {
         state: action.currentLocation
     }
  }
  return state;
  }
  
 