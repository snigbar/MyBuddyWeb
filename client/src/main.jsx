import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import authReducer from './state/AuthSlice.jsx'
import { Provider } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer, FLUSH, REHYDRATE,PURGE, REGISTER,PAUSE, PERSIST} from 'redux-persist'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'


const persistConfig = {key:'root', storage, version:1}
const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE,PURGE, REGISTER, PAUSE, PERSIST]
      }
    })
  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
  </Provider>
  </React.StrictMode>,
)
 