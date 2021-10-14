import { createStore } from 'vuex';
import storage from '../utils/storage';

const defaultState = {
  isDark: storage.get<boolean>('isDark'),
};

export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    setIsDark(state: typeof defaultState, data: boolean) {
      state.isDark = data;
      storage.set('isDark', data);
    },
  },
});
