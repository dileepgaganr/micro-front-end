import { counterStore } from "@/store/counter.store";
import { useEffect } from "react";


interface BroadCastMessage {
    count: number;
}

const channel = new BroadcastChannel('countChannel');

export function useCounterBroadCast() {
    const { count } = counterStore();

    useEffect(() => {
        const message: BroadCastMessage = { count };
        channel.postMessage(message);
        const handleMessage = ((e: MessageEvent<BroadCastMessage>) => {
            if (e.data) {
                counterStore.setState({ count: e.data.count })
            }
        });
        channel.addEventListener('message', handleMessage);
        return () => {
            channel.removeEventListener('message', handleMessage);
        }
    }, [count]);
}