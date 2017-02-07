import * as wxRedux from './wechat-weapp-redux.js'

const Redux = require('./redux.js')

import configureStore from './configureStore.js'
console.log(Redux)
export let Provider = (config) => {
    let options = Object.assign(config, {
        page : QPage,
        Redux : Redux
    })
    return wxRedux.Provider(configureStore(config.reducer))(
        options
    )
}
export { Redux }


let QPage = (config = {}) => {

    let reduxPlugin = config.reduxPlugin;

    let mapStateToData = state => {
        let obj = {};
        if(reduxPlugin.mapStateToData && reduxPlugin.mapStateToData.length){
            reduxPlugin.mapStateToData.forEach((item) => {
                obj[item] = state[item]
            })
        }
        return obj
    }

        let mapDispatchToProps = dispatch => {
        let obj = {},
            mapDispatchToProps = reduxPlugin.mapDispatchToProps;
        if(mapDispatchToProps){
            for(let key in mapDispatchToProps){
                obj[key] = function(){
                    let args = [];
                    for(let i=0,len=arguments.length;i<len;i++){
                        args.push(arguments[i])
                    }
                    return dispatch(mapDispatchToProps[key].apply(null, args))
                }
            }
        }
        return obj
    }

    let nextPageConfig = wxRedux.connect(mapStateToData, mapDispatchToProps)(config)

    Page(nextPageConfig)
}
