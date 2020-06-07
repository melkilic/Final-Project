
import {combineReducers} from 'redux'
import {mapReducer} from './mapReducer'
import {userReducer} from './userReducer'

 const AllReducers= combineReducers({
    mapState: mapReducer,
    userState: userReducer
})

export default AllReducers;