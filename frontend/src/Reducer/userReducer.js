
const initialState={
//    user: {
       user: undefined
//    }
}

export const userReducer=(state=initialState, action)=>{

    switch(action.type){
        case 'USER' :
            console.log(action.user)
            return{
                //   ...state, 
                  state: action.user
            }
            break;
    }
    return state;
}