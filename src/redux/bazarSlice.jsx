import { createSlice } from "@reduxjs/toolkit";
//import { addToCart, deleteItem } from "./path-to-bazar-reducer";
const initialState ={
    productData: [],
    userInfo: null,

};

export const bazarSlice = createSlice({

    name: "bazar",
    initialState,
    reducers: {
        addToCart:(state, action)=>{

            const item = state.productData.find(
                (item)=>item._id === action.payload._id
            );
            if(item){
                item.quantity += action.payload.quantity;
            }
            else{
                state.productData.push(action.payload) ;
            }
          
        },
     deleteItem: (state, action) => {
        state.productData = state.productData.filter(
            (item) => item._id !== action.payload
        );
     },
     resetCart: (state) => {
        state.productData = [];
     },
     increamentQuantity: (state, action) => {
        const item = state.productData.find(
            (item) => item._id === action.payload._id 
        );
        if (item){
            item.quantity++;
        }
     },
     decrementQuantity: (state, action) => {
        const item = state.productData.find(
            (item) => item._id === action.payload._id 
        ); 
    if(item.quantity === 1) {
        item.quantity = 1;
    }
    else{
        item.quantity--;
    }
    },

//========= user start here =========

addUser: (state, action) =>{
    state.userInfo = action.payload;
},

removeUser: (state) => {
    state.userInfo = null;
},


//========= user start end =========

},
});

export const { 
    addToCart,
    deleteItem,
    resetCart,
    increamentQuantity,
    addUser,
    removeUser,
    decrementQuantity,
 } = bazarSlice.actions;
export default bazarSlice.reducer;