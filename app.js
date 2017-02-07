//app.js
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
