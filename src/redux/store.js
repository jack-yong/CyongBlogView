/*
 * @Author: cyong
 * @Date: 2021-12-07 21:28:09
 * @LastEditors: cyong
 * @LastEditTime: 2022-02-27 14:41:46
 * @FilePath: \view\src\redux\store.js
 * @Description: store仓库
 */
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//引入根reducer
import rootReducer from './rootReducers'

//分别表示在本地开发环境下启用redux-devtools否则不适用
let storeEnhancers
if (process.env.NODE_ENV === 'production') {
    storeEnhancers = compose(applyMiddleware(thunk))
}
else {
    storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)))
}

/**
 * @author: cyong
 * @description: store的初始化函数 
 * @param {initialState}
 * @return {store}
 */
const configureStore = (initialState = {}) => {
    const store = createStore(rootReducer, initialState, storeEnhancers)
    return store
}

export default configureStore()


