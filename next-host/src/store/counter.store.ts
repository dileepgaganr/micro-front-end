import { create } from 'zustand';

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const counterStore = create<CounterState>((set: any) => ({
    count: 0,
    increment: () => set((state: any) => ({ count: state.count + 1 })),
    decrement: () => set((state: any) => ({ count: state.count - 1 }))
}));