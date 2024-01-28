import { createStore } from "vuex";

import mainData from "./mainData.js";

// console.log(mainData);

export default createStore({
  modules: {
    mainData,
  },
});
