
微信小程序集成Redux实现的Todo list
======================
小程序内[Redux](https://github.com/reactjs/redux)实现Todo list，同时集成了redux-devtools

![remote-redux-devtools](./remote-redux-devtools.gif)

引用了：[wechat-weapp-redux](https://github.com/charleyw/wechat-weapp-redux)
增加了 redux-thunk 的引用支持异步action

### 使用

导入到微信的开发工具运行就可以了。

### api

#类似Qunar的EXT语法#

##在app.js中引入Provider##

import { Provider } from './libs/QWX.js'
const reducer = require('./reducers/index.js')

App(
    Provider({
        reducer,
        onLaunch: function() {
            console.log("onLaunch")
        }
    })
)

##在reducers中引入QWX.redux.combineReducers来合并reducers##

import { Redux } from '../libs/QWX.js'
const combineReducers = Redux.combineReducers
const todos = require('./todos.js')
const visibilityFilter = require('./visibilityFilter.js')

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

module.exports = todoApp
