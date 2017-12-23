import * as types from './mutation-types'

// 触发事件和传入参数
export default{
    addTotalTime({commit},time){
        commit(types.ADD_TOTAL_TIME,time );
    },
    savePlan({commit},plan){
        commit(types.SAVE_PLAN, plan);
    },
    decTotalTime({commit},time){
        commit(types.DEC_TOTAL_TIME,time );
    },
    deletePlan({commit},idx){
        commit(types.DELETE_PLAN,idx );
    },

}


// this.$store.dispatch('savePlan', plan) 当执行了这样的方法就会调用 actions.js 里的 savePlan 方法，而 savePlan 又会触发 mutations 里的 types.SAVE_PLAN 最后修改数据视图更新

// PS：在这有个技巧就是，在 mutations 里都是用大写下划线连接，而我们的 actions 里都用小写驼峰对应。

// 个人理解这其实就是一个发布订阅的模式

// mutation-types 记录我们所有的事件名

// mutations 注册我们各种数据变化的方法

// actions 则可以编写异步的逻辑或者是一些逻辑，再去 commit 
// 我们的事件

// 如果有 getter 我们可以把一些需要处理返回的数据放在这即可，不进行业务操作