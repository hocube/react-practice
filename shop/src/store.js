import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 1, name : '강아지사료 웰비 스타 5kg', count : 16},
      {id : 2, name : '해피카우 프리미엄 멸균 고양이우유 펫밀크 100ml', count : 27}
    ],
    reducers : {
      addCount(state, action){
        let 번호 = state.findIndex((a)=>{ return a.id === action.payload})
        state[번호].count++
      },
      addItem(state, action){
        state.push(action.payload)
      }
    }
})

export let { addCount, addItem } = cart.actions


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 