import { createStore } from "vuex";
import contact from "./module/contact";
import taskmanager from "./module/taskmanager";

const store = createStore({
  state: {
    mainName: "ysk"
  },
  mutations: {},
  modules: {
    customer: contact,
    taskmanager
  }
});

export default store;