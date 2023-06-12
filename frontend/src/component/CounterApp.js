// import {useSelector, useDispatch} from 'react-redux'
// //The useSelector is used to extract state from the redux store
// const counterApp = ()=>{
// const counter = useSelector((state)=> state.counter)
//  const dispatch = useDispatch()

//  const increment = ()=>{
//    dispatch({type: 'INC'})
//  }
//  const decrement = ()=>{
//     dispatch({type: 'DEC'})
//  }
//  const add = ()=>{
//     dispatch({type: 'add', payload: 30})
//  }
//     return(

//         <div className="count">

//          <h1>counterApp</h1>
//          <h1>{counter}</h1>
//          <button onClick={increment}>increment</button>
//          <button onClick={decrement}>decrement</button>
//          <button onClick={add}>add</button>

//         </div>
      

//     )
// }

// export default counterApp





import {useSelector, useDispatch} from 'react-redux'
import {actions} from './store/index'
//The useSelector is used to extract state from the redux store
const counterApp = ()=>{
const counter = useSelector((state)=> state.counter)
 const dispatch = useDispatch()

 const increment = ()=>{
   dispatch(actions.increment())
 }
 const decrement = ()=>{
    dispatch(actions.decrement)
 }
 const add = ()=>{
    dispatch(actions.add(30))
 }
    return(

        <div className="count">

         <h1>counterApp</h1>
         <h1>{counter}</h1>
         <button onClick={increment}>increment</button>
         <button onClick={decrement}>decrement</button>
         <button onClick={add}>add</button>

        </div>
      

    )
}

export default counterApp