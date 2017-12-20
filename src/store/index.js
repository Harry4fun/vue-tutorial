import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    totalTime : 0,
    list : [{
        name : '张三',
        avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        date : '2017-12-22',
        totalTime : '6',
        comment : '测试任务。。。。。20171222'    
    }]        
};

export default new Vuex.Store({
    state
});