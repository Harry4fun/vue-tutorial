import * as types from './mutation-types.js'
export default{
    //增加总时间
    [types.ADD_TOTAL_TIME](state,time){
        state.totalTime = state.totalTime + time
    }

}