<template>
    <div class="counter">
        <button @click="increment" class="counter-button">Increment</button>
        <span class="counter-value"> {{ count }}</span>
        <button @click="decrement" class="counter-button"> Decrement</button>
    </div>
</template>

<script>
import { useCounterStore } from '@/store/store';
import { computed } from 'vue';
export default {
    name: 'CounterComponent',
    setup() {
        const store = useCounterStore();
        const count = computed(() => store.count);
        const increment = () => {
            store.increment();
        };
        const decrement = () => {
            store.decrement();
        };
        return {
            count,
            increment,
            decrement,
        };
    }
}
</script>

<style scoped>
.counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: Arial, sans-serif;
}

.counter-button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #42b983;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.counter-button:hover {
    background-color: #2b5a45;
}

.counter-value {
    font-size: 20px;
    font-weight: bold;
    color: #fb0000;
}
</style>