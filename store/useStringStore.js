import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStringStore = create(persist(
    (set) => ({
    name: '',
    email: '',
    setName: (newString) => set({ name: newString }),
    setEmail: (newString) => set({ email: newString }),
    }),
    {
      name: 'count-storage', // unique name for localStorage key
    }
  )
);

export default useStringStore;