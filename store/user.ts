import { create } from 'zustand';

interface UserType {
  users: Array<any>;
  fetchUser: () => void;
}

const useUser = create<UserType>()((set) => ({
  users: [],
  fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => set({ users: data }));
  },
}));

export default useUser;
