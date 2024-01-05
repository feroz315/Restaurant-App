
// import { applyMiddleware,createStore, combineReducers  } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import useReducer from "./Reducer";
// // import * as thunk from 'redux-thunk';
// import logger from "redux-logger";


// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage
// }


// const rootReducer = combineReducers({
//  userReducer: persistReducer(persistConfig, useReducer)
// });
    


// export const mystore = createStore(rootReducer, applyMiddleware(logger));
// export const persistor = persistStore(mystore);

    
import { configureStore } from '@reduxjs/toolkit'
// import basketSlice from './BasketSlice';
// import resturantSlice from './RestaurantSlice';
import MyCartSlice from  '../ReduxFolder/CartSlics';
import  MyProductSlice from '../ReduxFolder/HomeSlics';
import  ResturantSlice from './RestaurantSlice';


export const store = configureStore({
  reducer: {
    product: MyProductSlice,
    cart: MyCartSlice,
    resturant:ResturantSlice
  },
})























// import { configureStore } from "@reduxjs/toolkit";
// import MyProductReducer from "./HomeSlics";
// import MyCartReducer from "./CartSlics";
// import MyUserSlice from "./UserSlics";


// export const mystore = configureStore({
//     reducer: {
//         product: MyProductReducer,
//         cart:  MyCartReducer,
//         user: MyUserSlice
//     },
// });