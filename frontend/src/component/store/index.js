//  redux

//import  {createStore} from 'react-redux'

//   const reducerfn = (state={counter : 0}, Action)=>{
//     if(Action.type ==="INC"){
//       return {counter: state.counter + 1}
//     }

//     if(Action.type === "DEC"){
//         return {counter: state.counter - 1}
//     }

//     if(Action.type === "ADD"){
//        return {counret: state.counter + Action.payload}
//     }
//       return state
//   }
// const store = createStore(reducerfn)




//redux toolkit tutorial part

import {conFigureStore, createStore} from '@react.js/toolkit'

const counterSlice = createStore({
    name: "counter",
    initialState : {counter : 0},
    reducers:{
        increment(state,action){
            state.counter++ 
        },
        decrement(state,action){
            state.counter-- 
        },
        add(state,action){
            state.counter+= action.payload 
        }
    }


})

export const actions = counterSlice.actions
const store = conFigureStore({
   reducer: counterSlice.reducer
})

export default store