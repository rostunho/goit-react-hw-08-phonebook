import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { themeReducer } from './theme/slice';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/reducer';

const persistConfig = {
  auth: { key: 'auth', storage, whitelist: ['token'] },
  theme: { key: 'theme', storage, whitelist: ['isDark'] },
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    theme: persistReducer(persistConfig.theme, themeReducer),
    auth: persistReducer(persistConfig.auth, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);