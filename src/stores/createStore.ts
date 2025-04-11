import MobXRootStore from "@/stores/mobx/MobXRootStore.ts";
// import ZustandTodoStore from "@/stores/zustand/ZustandTodoStore.ts";
// import ReduxTodoStore from "@/stores/redux/ReduxTodoStore.ts";

export const createStore = (type: string) => {
  switch (type) {
    case "mobx":
      return new MobXRootStore();
    // case "zustand":
    //   return new ZustandTodoStore();
    // case "redux":
    //   return new ReduxTodoStore();
    default:
      throw new Error("Unknown store type");
  }
};
