import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(){
      return 'john kim'
    }
  }
})

export let { changeName } = user.actions


let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 1, name : '강아지사료 웰비 스타 5kg', count : 16},
      {id : 2, name : '해피카우 프리미엄 멸균 고양이우유 펫밀크 100ml', count : 27}
    ]
})


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer
  }
}) 