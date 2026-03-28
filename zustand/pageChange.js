import { create } from "zustand";

const usePageChange = create((set, get) => ({
  page: "home",
  changePage: (newPage) => {
    set({ page: newPage });
    console.log("Page changed to:", get().page);
  },
}));

export default usePageChange;
