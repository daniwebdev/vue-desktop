import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";


const dataState = createPersistedState({
    paths: ['data']
  })

export default createStore({
    // modules: modules,
    plugins: [dataState],
    state() {
        return {
            title: "Home - Desktop",
            darkMode: false,
        };
    },
    mutations: {
        set_title(state, title) {
            state.title = title
        },
        toggleDarkMode(state, darkMode) {
            state.darkMode = darkMode

            if(darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem("darkMode", "true");
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem("darkMode", "false");
            }
        },
    },
    actions: {
        setTitle(context, title) {
            context.commit('set_title', title)
        }
    }
});