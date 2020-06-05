
import {combineReducers} from 'redux'
import {mapReducer} from './mapReducer'

 const AllReducers= combineReducers({
    mapState: mapReducer
})

export default AllReducers;