import { create } from 'zustand';
type DataItem = {
  name: string;
  age: number;
  address: string;
};
interface Data {
  data: DataItem[];
  setData: (data: DataItem[]) => void;
}

const useStore = create<Data>()((set) => ({
  data: [
    {
      key: 0,
      name: 'Jack',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: 1,
      name: 'Lucy',
      age: 42,
      address: 'Sidney No. 2 Lake Park',
    },
  ],
  setData: (data) => set({ data }),
}));

export default useStore;
