'use client';
import React, { useEffect, useRef } from "react";
import { counterStore } from '@/store/counter.store';
import { useCounterBroadCast } from '@/utils/vue.state.broadcast';
import styles from '../styles/ang.module.css';

const angularApp = import('angularRemote/bootstrap').then((mod) => (mod));

const Angular = () => {
  let angularInstance: any = null;
  const ref = useRef<HTMLDivElement>(null);
  const { count, increment, decrement } = counterStore();
  useCounterBroadCast();

  useEffect(() => {
    const loadAngularApp = async () => {
      if (ref.current) {
        try {
          const module = await angularApp;
          if (module.default) {
            module.default();
          } else {
            throw new Error("Module does not have a default export");
          }
        } catch (error) {
          console.error('Error loading Angular app:', error);
        }
      }
    };

    loadAngularApp();

    return () => {
      if (angularInstance && typeof angularInstance.destroy === 'function') {
        angularInstance.destroy();
      }
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>
      <div className={styles.nextComponent}>
        <button onClick={decrement}>Next Js Decrement - </button>
        <button onClick={increment}>Next Js Increment + </button>
        <span>Count Value to and fro Angular (Fetched from next js store as well) : {count}</span>
      </div>
      <div id="angApp">
        <app-root></app-root>
      </div>
    </div>
  );
};

export default Angular;
