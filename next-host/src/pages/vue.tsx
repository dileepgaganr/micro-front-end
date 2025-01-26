'use-client';
import { counterStore } from '@/store/counter.store';
import { useCounterBroadCast } from '@/utils/vue.state.broadcast';
import { useEffect, useRef } from 'react';
import styles from '../styles/vue.module.css';

const vueApp = import('vueRemote/createVueApp').then((mod) => ({ default: mod.createVueApp, destroy: mod.destroy }));

const Vue = () => {
  const ref = useRef<HTMLDivElement>(null);
  const instance = useRef<any>(null);
  const { count, increment, decrement } = counterStore();
  useCounterBroadCast();

  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      const mountVueApp = async () => {
        if (ref.current) {
          try {
            const { default: createVueApp } = await vueApp;
            if (!instance.current) {
              instance.current = createVueApp(ref.current)
            }
          }
          catch (error) {
            console.error('Error loading Vue app:', error);
          }
        }
      };
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        mountVueApp();
      }
      const cleanupVueApp = async () => {
        if (instance.current) {
          const { destroy: destroy } = await vueApp;
          destroy(instance.current);
          instance.current = null;
        }
        if (ref.current) { ref.current.innerHTML = ''; }
      };
      return () => {
        cleanupVueApp();
      }
    }
  }, []);
  return (
    <div>
      <div className={styles.nextComponent}>
        <button onClick={decrement}>Next Js Decrement - </button>
        <button onClick={increment}>Next Js Increment + </button>
        <span>Count Value to and fro Vue js : {count}</span>
      </div>
      <div ref={ref} id="vueApp"></div>
    </div>
  );
}

export default Vue;

