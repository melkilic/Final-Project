
const initialState={
       user: undefined
}

export const userReducer=(state=initialState, action)=>{

    switch(action.type){
        case 'USER' :
            console.log(action.user)
            return{
                //   ...state, 
                  state: action.user
            }
            case 'LOG_OUT': 
                return{
              state: undefined
                }
            
    }
    return state;
}