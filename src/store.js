import { createStore, applyMiddleware } from '../../../../Library/Caches/typescript/3.0/node_modules/redux';
import thunk from 'redux-thunk'
import reducer from './reducers'


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;