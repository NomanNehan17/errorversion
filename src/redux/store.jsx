import { configureStore } from "@reduxjs/toolkit";
import{
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import bazarRedcuer from "./bazarSlice";
import storage from "redux-persist/lib/storage";
//import Reducer from "./reducers";



import persistReducer from "redux-persist/es/persistReducer";
const persistConfig ={
  key: "root",
  version : 1,
  storage,
};



const persistedReducer = persistReducer(persistConfig, bazarRedcuer);


export const store = configureStore({
  reducer: { bazar: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

