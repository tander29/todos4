import { createStore, } from '../../../../Library/Caches/typescript/3.0/node_modules/redux';
import reducer from './reducers'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store;