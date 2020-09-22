import {createStore, applyMiddleware, compose} from 'redux';
import {loadState,saveState} from './localStorage';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initilaState = {};

const persistingState = loadState();

const middleware = [thunk];


const store = createStore(rootReducer,persistingState ||initilaState,compose(

applyMiddleware(...middleware),

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))


store.subscribe(throttle(()=>{
    saveState( {
        cart:store.getState().cart
    })
},1000))

// store.subscribe(throttle(()=>{
//     saveState( store.getState())
// },1000))




export default store;