import { defineStore } from 'pinia'

const channel = new BroadcastChannel('ccounterChannel');

channel.onmessage = (e) => {
    const store = useCounterStore();
    if (e.data?.count) {
        store.count = e.data?.count;
    }
};

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++;
            channel.postMessage({ count: this.count });
        },

        decrement() {
            this.count--;
            channel.postMessage({ count: this.count });
        },
    },
})