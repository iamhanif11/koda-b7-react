import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./slices/surveySlice";
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/es/storage"
import productReducer from "./slices/productSlice"



const persistConfig = {
    key: 'Minitask',
    storage,
}

const persistedProductReducer = persistReducer(persistConfig, productReducer)

const store= configureStore({
    reducer: {
        survey: surveyReducer,
        products: persistedProductReducer
    }, middleware: (defaultMiddleware) => {
        return defaultMiddleware ({
            serializableCheck:{
                ignoredActions: [
                    FLUSH,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    REHYDRATE
                ]
            }
        })
    }
});

export const persistor = persistStore(store)
export default store